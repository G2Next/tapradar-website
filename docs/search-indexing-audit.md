# Search indexing audit — 2026-09-07

The supplied Search Console URL inspection confirms that the production homepage is indexed. The exclusion report does not indicate a site-wide indexing failure.

## Changes

- Restrict the `/app` robots rule to the exact path, query variants and descendants so `/apple-icon` is crawlable.
- Reuse existing translated legal headings for branded metadata titles when a full-title translation is absent. This also updates Open Graph and Twitter titles without modifying legal text.
- Generate language roots without trailing slashes in links, canonicals, hreflang and sitemap entries. Production's 135-entry sitemap contained 14 language roots returning 308; all 135 entries return 200 in the corrected local production build.
- Omit sitemap `lastModified` until genuine content modification dates are available, rather than claiming every build changes every page.
- Permanently redirect `/preis` to `/fuer-geschaefte#tarife` and `/my-konto` to `/login`. Next.js first normalizes trailing-slash variants. No old WordPress accounts or content are recreated.

## Findings that do not need indexability changes

- The old WordPress emoji script returns 403 and is not referenced by the checked public pages or sitemap.
- `/feed/` returns 404; no current feed replacement was identified.
- The legacy `wc-ajax` query renders the homepage with the clean homepage canonical.
- Open Graph and favicon URLs are reachable image resources, not separate content pages.
- The four discovered-but-not-indexed legal pages return 200 with translated content and self-referencing canonicals. Their Search Console status alone does not establish a technical block.
- The five `/de/...` links to original legal documents intentionally use the locale-reset redirect. Linking directly to unprefixed German paths would allow the existing language cookie to redirect the user back to the translated document.

## Validation

- `npm test`: 52 tests pass across 13 files, including title coverage for all 14 non-German languages, robots boundaries and sitemap URL normalization.
- `npm run lint`: passes.
- `npm run build`: passes, including TypeScript checking.
- Local production server: all 135 sitemap URLs return 200; additional public-page links resolve or have expected German-locale redirects; `/login` and icons return 200.
- Both legacy redirects return 308 with the expected destination; trailing-slash normalization verified.
- Rendered titles verified for `/bs/agb`, `/bs/agb-geschaeftskunden`, `/bs/widerrufsbelehrung` and `/it/agb-verbraucher`.

## Remaining evidence and post-deployment checks

The exact 16 URLs in Search Console's redirect category have not been supplied. The 14 live sitemap redirects were independently verified; they must not be assumed to be the same URLs Google reported. Add the export to this audit when available, using the same PR if it is still open.

After this PR is merged and deployed, verify the production robots.txt, 135 sitemap URLs, translated titles and legacy redirects again. Use Search Console live URL inspection for affected public pages, and request validation where applicable. Production verification has not been performed against this unmerged change. Google controls recrawl timing and indexing.
