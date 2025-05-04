import { index, layout, prefix, route } from "@react-router/dev/routes";
import type { RouteConfig } from "@react-router/dev/routes";

export default [
  layout("layouts/default.tsx", [
    index("routes/home.tsx"),
    route("contact", "routes/contact.tsx"),

    ...prefix("blog", [
      index("routes/blog/blog.tsx"),
      route(":slug", "routes/blog/[slug].tsx"),
    ]),
  ]),
  // Actions
  route("actions/color-scheme", "actions/color-scheme.ts"),
] satisfies RouteConfig;
