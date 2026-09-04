function reportBrowserError(source: string, error: unknown) {
  const message = error instanceof Error ? error.message : String(error ?? "Unbekannter Browserfehler");
  const digest = typeof error === "object" && error !== null && "digest" in error ? String(error.digest) : undefined;
  void fetch("/api/errors", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source, route: window.location.pathname, message, digest }),
    keepalive: true,
  }).catch(() => undefined);
}

window.addEventListener("error", event => reportBrowserError("browser-error", event.error ?? event.message));
window.addEventListener("unhandledrejection", event => reportBrowserError("browser-unhandled-rejection", event.reason));
