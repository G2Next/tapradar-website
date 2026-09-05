import type { Instrumentation } from "next";
import { recordAppError } from "@/lib/app-errors";

export const onRequestError: Instrumentation.onRequestError = async (error, request, context) => {
  const digest = typeof error === "object" && error !== null && "digest" in error ? String(error.digest) : null;
  await recordAppError({
    source: "next-server",
    error,
    route: request.path,
    operation: `${request.method} ${context.routeType}`,
    digest,
    context: {
      routePath: context.routePath,
      routerKind: context.routerKind,
      routeType: context.routeType,
      renderSource: context.renderSource,
      revalidateReason: context.revalidateReason ?? null,
    },
  });
};
