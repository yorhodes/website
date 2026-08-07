import bio from "../data/bio.json";
import experiences from "../data/experience.json";
import talks from "../data/talks.json";
import writing from "../data/writing.json";

export const SITE_URL = "https://www.yorke.dev";

export interface PageMetadata {
  path: string;
  label: string;
  title: string;
  description: string;
  detail: string;
}

export const getPageMetadata = (pathname: string): PageMetadata => {
  const path = pathname.split("?")[0].replace(/\/$/, "") || "/";

  switch (path) {
    case "/experience": {
      const latest = experiences[0];
      const latestRole = latest.roles[0];

      return {
        path,
        label: "Experience",
        title: "Experience",
        description: `${latestRole.title} at ${latest.name}`,
        detail: `${experiences.length} organizations · ${latestRole.start}–${latestRole.end}`,
      };
    }
    case "/writing": {
      const latest = writing[0];

      return {
        path,
        label: "Writing",
        title: "Writing",
        description: latest.title,
        detail: `${writing.length} essays · Latest ${latest.published}`,
      };
    }
    case "/talks": {
      const latest = talks[0];

      return {
        path,
        label: "Talks",
        title: "Talks",
        description: latest.title,
        detail: `${talks.length} talks and conversations · Latest ${latest.published}`,
      };
    }
    default:
      return {
        path: "/",
        label: "Home",
        title: bio.title[0],
        description: bio.title.slice(1).join(" · "),
        detail: bio.tagline,
      };
  }
};

const contentVersion = (metadata: PageMetadata) => {
  const value = JSON.stringify(metadata);
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return (hash >>> 0).toString(36);
};

export const getOgImageUrl = (pathname: string) => {
  const metadata = getPageMetadata(pathname);
  const params = new URLSearchParams({
    page: metadata.path,
    v: contentVersion(metadata),
  });

  return `${SITE_URL}/api/og?${params.toString()}`;
};
