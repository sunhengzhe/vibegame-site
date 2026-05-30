import type { LucideIcon } from "lucide-react";
import { Brush, Crown, Swords, Timer, WandSparkles } from "lucide-react";

export type GameTone = "pixel" | "dopamine";

export type GameLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export type GameCard = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  tone: GameTone;
  tags: readonly string[];
  icon: LucideIcon;
  links: readonly GameLink[];
};

export type ContactInfo = {
  label: string;
  value: string;
  qrSrc: string;
};

export const games: readonly GameCard[] = [
  {
    id: "chess-brawl",
    title: "象棋大乱斗",
    subtitle: "像素肉鸽象棋",
    description: "把象棋拆成一场带构筑、战利品和奇招的短局战斗。更像一盒会反复变招的战术玩具。",
    href: "https://chess-brawl.vibegame.site/",
    imageSrc: "/games/chess-brawl/screenshot.png",
    imageAlt: "象棋大乱斗的实际战斗棋盘截图",
    tone: "pixel",
    tags: ["Pixel", "Roguelike", "Strategy"],
    icon: Swords,
    links: [
      { label: "开始征程", href: "https://chess-brawl.vibegame.site/", primary: true },
      { label: "联系作者", href: "#contact" },
    ],
  },
  {
    id: "memory-draw",
    title: "我画我猜",
    subtitle: "HOT 多巴胺画图局",
    description: "一眼就能开笑的画图记忆挑战：看词、画暗号、反查答案，越画越离谱，适合马上拉朋友开一局。",
    href: "https://paipaiji.vibegame.site/",
    imageSrc: "/games/memory/home-memory-art.png",
    imageAlt: "我画我猜正在记忆并绘制的游戏截图",
    tone: "dopamine",
    tags: ["Hot", "Drawing", "Party"],
    icon: Brush,
    links: [{ label: "马上开画", href: "https://paipaiji.vibegame.site/", primary: true }],
  },
] as const;

export const contactInfo: ContactInfo = {
  label: "QQ",
  value: "825980764",
  qrSrc: "/games/chess-brawl/qrcode_qq.jpg",
};

export const siteSignals = [
  { label: "正在玩的入口", value: "2", icon: Crown },
  { label: "小而完整", value: "Web", icon: WandSparkles },
  { label: "随时开局", value: "Now", icon: Timer },
] as const;
