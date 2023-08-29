import { ImageResponse } from "next/server";
import imageData from "../../public/images/og.jpg";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img width="1200" height="630" src="https://i.ibb.co/gWVNSgj/og.jpg" />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
