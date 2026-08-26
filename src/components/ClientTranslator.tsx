"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";
import { translateText } from "@/i18n/translate";

const translatedAttributes = ["alt", "aria-label", "placeholder", "title"] as const;
const ignoredElements = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE"]);

function translateElement(root: ParentNode, locale: Locale) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);

  for (const node of nodes) {
    const parent = node.parentElement;
    if (!parent || ignoredElements.has(parent.tagName) || parent.closest("[data-no-translate]")) continue;
    const translated = translateText(locale, node.data);
    if (translated !== node.data) node.data = translated;
  }

  const elements = root instanceof Element ? [root, ...root.querySelectorAll("*")] : [...root.querySelectorAll("*")];
  for (const element of elements) {
    if (element.closest("[data-no-translate]")) continue;
    for (const attribute of translatedAttributes) {
      const value = element.getAttribute(attribute);
      if (!value) continue;
      const translated = translateText(locale, value);
      if (translated !== value) element.setAttribute(attribute, translated);
    }
  }
}

export function ClientTranslator({ locale }: { locale: Locale }) {
  useEffect(() => {
    if (locale === "de") return;

    translateElement(document.body, locale);
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData" && mutation.target.parentNode) {
          translateElement(mutation.target.parentNode, locale);
        }
        for (const node of mutation.addedNodes) {
          if (node instanceof Element) translateElement(node, locale);
          else if (node.parentNode) translateElement(node.parentNode, locale);
        }
      }
    });
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
    return () => observer.disconnect();
  }, [locale]);

  return null;
}
