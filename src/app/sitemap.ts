import { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const routes = [
    "",
    "/boxes",
    "/boxes/monthly",
    "/boxes/eid",
    "/digital",
    "/store",
    "/resources",
    "/about",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
    "/accessibility",
  ];

  return routes.map((path) => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
