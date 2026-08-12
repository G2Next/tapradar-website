import { Fragment } from "react";
import { LegalPage } from "@/components/LegalPage";
import type { Locale } from "@/i18n/config";
import type { LegalBlock, LegalDocument as LegalDocumentType } from "@/content/legal/types";

function withMailtoLinks(text: string) {
  const parts = text.split(/(support@tapradar\.app|beschwerde@tapradar\.app)/g);
  return parts.map((part, index) =>
    part === "support@tapradar.app" || part === "beschwerde@tapradar.app"
      ? <a key={index} href={`mailto:${part}`}>{part}</a>
      : <Fragment key={index}>{part}</Fragment>,
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "p") return <p>{withMailtoLinks(block.text)}</p>;
  if (block.type === "list") return <ul>{block.items.map((item, index) => <li key={index}>{withMailtoLinks(item)}</li>)}</ul>;
  if (block.type === "callout") {
    return (
      <div className="legal-callout">
        <strong>{block.heading}</strong>
        <p>{withMailtoLinks(block.text)}</p>
      </div>
    );
  }
  return (
    <div className="legal-table-wrap">
      <table>
        <thead><tr>{block.headers.map((header, index) => <th key={index}>{header}</th>)}</tr></thead>
        <tbody>
          {block.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LegalDocumentPage({
  document,
  locale,
  germanHref,
}: {
  document: LegalDocumentType;
  locale: Locale;
  germanHref: string;
}) {
  return (
    <LegalPage title={document.title} date={document.stand} locale={locale} germanHref={germanHref}>
      <p className="legal-subtitle">{document.subtitle}</p>
      {document.intro.map((block, index) => <Block key={index} block={block} />)}
      {document.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.blocks.map((block, index) => <Block key={index} block={block} />)}
        </section>
      ))}
      {document.sources && document.sources.length > 0 ? (
        <section>
          <h2>{document.sourcesHeading}</h2>
          {document.sourcesIntro ? <p>{document.sourcesIntro}</p> : null}
          <ul>
            {document.sources.map((source) => (
              <li key={source.url}>
                {source.label}: <a href={source.url} target="_blank" rel="noopener noreferrer">{source.url}</a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </LegalPage>
  );
}
