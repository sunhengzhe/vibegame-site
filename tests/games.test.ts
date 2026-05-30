import { describe, expect, it } from "vitest";
import { contactInfo, games } from "@/lib/games";

describe("games directory", () => {
  it("keeps every game launchable from the home page", () => {
    expect(games).toHaveLength(2);
    expect(games.map((game) => game.href)).toEqual([
      "https://chess-brawl.vibegame.site/",
      "https://paipaiji.vibegame.site/",
    ]);
    expect(games.every((game) => game.links.some((link) => link.primary))).toBe(true);
  });

  it("exposes the author contact from chess brawl", () => {
    expect(contactInfo).toEqual({
      label: "QQ",
      value: "825980764",
      qrSrc: "/games/chess-brawl/qrcode_qq.jpg",
    });
  });
});
