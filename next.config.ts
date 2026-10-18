import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* GitHub Pages serves files only, so the build must be a static export.
     Partial prerendering cannot be used in export mode. */
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  /* Dev-only: `next dev` binds `localhost`, so opening the site as
     `127.0.0.1` is a different origin. Without this the dev runtime
     (HMR client + hydration resources) is blocked and the page never
     hydrates — the intro field then covers a page that no JS can lift. */
  allowedDevOrigins: ["127.0.0.1"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
