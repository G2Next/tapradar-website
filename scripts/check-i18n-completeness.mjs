import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const locales = ["de", "en", "tr", "fr", "it", "es", "pl", "cs", "hu", "sk", "sr-Latn", "bs", "hr", "ro", "bg"];
const fullCatalogs = ["app.generated.json", "current.generated.json", "secondary.generated.json", "legal.generated.json", "recent.generated.json"];
const catalogDirectory = path.resolve("src/i18n");
const errors = [];
const knownGermanTexts = new Set();

for (const filename of fullCatalogs) {
  const catalog = JSON.parse(fs.readFileSync(path.join(catalogDirectory, filename), "utf8"));
  const sourceKeys = Object.keys(catalog.de ?? {});
  for (const key of sourceKeys) knownGermanTexts.add(key);

  for (const locale of locales) {
    const messages = catalog[locale];
    if (!messages) {
      errors.push(`${filename}: locale ${locale} is missing`);
      continue;
    }
    const missing = sourceKeys.filter((key) => !messages[key]?.trim());
    if (missing.length) errors.push(`${filename}: ${locale} is missing ${missing.length} message(s)`);
  }
}

const structured = JSON.parse(fs.readFileSync(path.join(catalogDirectory, "structured.generated.json"), "utf8"));
for (const key of Object.keys(structured.de ?? {})) knownGermanTexts.add(key);
for (const locale of ["de", "fr", "it", "es", "cs", "sk"]) {
  const missing = Object.keys(structured.de ?? {}).filter((key) => !structured[locale]?.[key]?.trim());
  if (missing.length) errors.push(`structured.generated.json: ${locale} is missing ${missing.length} message(s)`);
}

const translatableProps = new Set(["label", "title", "text", "description", "placeholder", "alt", "aria-label", "pendingLabel", "intro", "newCta", "emptyTitle", "emptyText", "detail"]);

for (const filename of sourceFiles([path.resolve("src/app"), path.resolve("src/components")])) {
  if (!filename.endsWith(".tsx")) continue;
  const source = ts.createSourceFile(filename, fs.readFileSync(filename, "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  visit(source, filename);
}

function visit(node, filename) {
  if (ts.isJsxText(node)) checkText(node.text, filename);
  if (ts.isJsxAttribute(node) && ts.isIdentifier(node.name) && translatableProps.has(node.name.text) && node.initializer && ts.isStringLiteral(node.initializer)) {
    checkText(node.initializer.text, filename);
  }
  if (ts.isPropertyAssignment(node)) {
    const name = ts.isIdentifier(node.name) || ts.isStringLiteral(node.name) ? node.name.text : "";
    if ((translatableProps.has(name) || name === "error") && ts.isStringLiteralLike(node.initializer)) checkText(node.initializer.text, filename);
  }
  if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && ["setMessage", "setClientError"].includes(node.expression.text)) {
    for (const argument of node.arguments) if (ts.isStringLiteralLike(argument)) checkText(argument.text, filename);
  }
  if (ts.isStringLiteralLike(node)) {
    let parent = node.parent;
    while (parent && !ts.isSourceFile(parent) && !ts.isJsxAttribute(parent)) {
      if (ts.isJsxExpression(parent)) {
        checkText(node.text, filename);
        break;
      }
      parent = parent.parent;
    }
  }
  ts.forEachChild(node, (child) => visit(child, filename));
}

function checkText(raw, filename) {
  const value = raw.trim().replace(/\s+/gu, " ");
  if (!isCandidate(value) || knownGermanTexts.has(value)) return;
  errors.push(`${path.relative(process.cwd(), filename)}: untranslated UI text “${value.slice(0, 90)}”`);
  knownGermanTexts.add(value);
}

function isCandidate(value) {
  if (!value || value.length > 700 || !/[A-Za-zÄÖÜäöüßÀ-žА-я]/u.test(value)) return false;
  if (/^(?:https?:|\/|[.#]|[A-Z_]{2,}|[a-z0-9_-]+(?:\.[a-z0-9_-]+)+$)/u.test(value)) return false;
  if (/[{}]|=>|(?:^|\s)(?:bg-|text-|mt-|px-|py-|rounded-|border-|grid|flex|font-|sm:|md:|lg:|xl:)/u.test(value)) return false;
  return true;
}

function sourceFiles(directories) {
  const files = [];
  for (const directory of directories) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const target = path.join(directory, entry.name);
      if (entry.isDirectory()) files.push(...sourceFiles([target]));
      else files.push(target);
    }
  }
  return files;
}

if (errors.length) {
  console.error(`i18n completeness check failed:\n${errors.map((error) => `- ${error}`).join("\n")}`);
  process.exit(1);
}

console.log(`i18n completeness check passed for ${locales.length} locales.`);
