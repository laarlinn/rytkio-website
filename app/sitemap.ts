import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${site.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/tuoremehuasema/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/lihankasittely/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/palvelut/`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/yhteystiedot/`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];
}
