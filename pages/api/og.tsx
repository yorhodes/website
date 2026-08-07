/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";

import { getPageMetadata } from "../../lib/metadata";

export const config = {
  runtime: "edge",
};

export default function handler(request: Request) {
  const requestUrl = new URL(request.url);
  const metadata = getPageMetadata(
    requestUrl.searchParams.get("page") ?? "/"
  );
  const headshotUrl = new URL("/headshot.jpeg", requestUrl.origin).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#f7f7f4",
          color: "#171717",
          padding: "66px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 27,
                fontWeight: 700,
              }}
            >
              <span>Yorke Rhodes</span>
              <span style={{ marginLeft: "7px", fontSize: 19 }}>IV</span>
            </div>
            <div
              style={{
                display: "flex",
                color: "#64645f",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "1.5px",
              }}
            >
              {metadata.label.toUpperCase()}
            </div>
          </div>

          <div
            style={{ display: "flex", alignItems: "center", gap: "44px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", flex: 1 }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: metadata.title.length > 54 ? 52 : 60,
                  lineHeight: 1.06,
                  fontWeight: 700,
                  letterSpacing: "-2.2px",
                  maxWidth: "820px",
                }}
              >
                {metadata.title}
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "20px",
                  fontSize: 25,
                  lineHeight: 1.35,
                  color: "#4a4a47",
                  maxWidth: "820px",
                }}
              >
                {metadata.description}
              </div>
            </div>
            <img
              src={headshotUrl}
              alt=""
              width="210"
              height="210"
              style={{
                borderRadius: "999px",
                objectFit: "cover",
                filter: "grayscale(25%)",
                border: "4px solid #ffffff",
                boxShadow: "0 12px 32px rgba(0, 0, 0, 0.12)",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "23px",
              borderTop: "2px solid #d5d5cd",
              color: "#64645f",
              fontSize: 19,
            }}
          >
            <span>{metadata.detail}</span>
            <span style={{ fontWeight: 700, color: "#171717" }}>
              yorke.dev
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control":
          "public, max-age=0, s-maxage=31536000, immutable",
      },
    }
  );
}
