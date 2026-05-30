import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vibegame.site"),
  title: "Vibegame",
  description: "Sunhz 的个人游戏入口页，收纳象棋大乱斗和我画我猜。",
  openGraph: {
    title: "Vibegame",
    description: "两个小而完整的网页游戏入口。",
    images: ["/games/memory/home-memory-art.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
