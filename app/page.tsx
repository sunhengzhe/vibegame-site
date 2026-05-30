import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Play, Sparkles } from "lucide-react";
import { contactInfo, games, siteSignals, type GameCard } from "@/lib/games";

const toneClass: Record<GameCard["tone"], string> = {
  pixel: "border-slate-950 bg-[#fffaf2] shadow-arcade",
  dopamine: "border-slate-950 bg-[#ff5c5c] shadow-arcade",
};

const imageClass: Record<GameCard["tone"], string> = {
  pixel: "bg-[#f6f2eb] p-2 sm:p-3",
  dopamine: "bg-[#ffe45e] p-2 sm:p-3",
};

const imageFitClass: Record<GameCard["tone"], string> = {
  pixel: "object-cover",
  dopamine: "object-contain",
};

const subtitleClass: Record<GameCard["tone"], string> = {
  pixel: "bg-white text-slate-700",
  dopamine: "bg-[#ffe45e] text-slate-950",
};

const textClass: Record<GameCard["tone"], string> = {
  pixel: "text-slate-700",
  dopamine: "text-white",
};

const tagClass: Record<GameCard["tone"], string> = {
  pixel: "bg-white text-slate-700",
  dopamine: "bg-white text-slate-950",
};

const primaryLinkClass: Record<GameCard["tone"], string> = {
  pixel: "bg-slate-950 text-white",
  dopamine: "bg-[#ffe45e] text-slate-950",
};

function GamePanel({ game, featured }: { game: GameCard; featured: boolean }) {
  const Icon = game.icon;
  const isHot = game.tone === "dopamine";

  return (
    <article
      className={`group relative overflow-hidden border-[5px] ${toneClass[game.tone]} ${
        featured ? "lg:col-span-7" : "lg:col-span-5"
      }`}
    >
      {isHot ? (
        <div className="absolute right-4 top-4 z-10 rotate-3 border-[4px] border-slate-950 bg-[#ffe45e] px-3 py-2 font-display text-xl font-black text-slate-950 shadow-[5px_5px_0_#111827]">
          HOT
        </div>
      ) : null}
      <div className="relative z-0 grid min-h-[560px] content-between gap-6 p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className={`mb-3 inline-flex border-[3px] border-slate-950 px-3 py-1 font-pixel text-xs uppercase tracking-[0.18em] ${subtitleClass[game.tone]}`}>
              {game.subtitle}
            </p>
            <h2 className={`font-display text-4xl font-black leading-none ${isHot ? "text-white drop-shadow-[4px_4px_0_#111827] sm:text-7xl" : "text-slate-950 sm:text-6xl"}`}>
              {game.title}
            </h2>
          </div>
          <div className={`grid size-14 shrink-0 place-items-center border-[4px] border-slate-950 shadow-[5px_5px_0_#111827] ${isHot ? "bg-[#ffe45e]" : "bg-white"}`}>
            <Icon className="size-7" strokeWidth={2.4} />
          </div>
        </div>

        <div className={`relative aspect-[16/10] overflow-hidden border-[4px] border-slate-950 ${imageClass[game.tone]}`}>
          <Image
            src={game.imageSrc}
            alt={game.imageAlt}
            fill
            priority={featured}
            sizes={featured ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
            className={`${imageFitClass[game.tone]} transition duration-500 group-hover:scale-[1.03]`}
          />
        </div>

        <div className="grid gap-5">
          <p className={`max-w-xl text-base font-black leading-7 sm:text-lg ${textClass[game.tone]}`}>{game.description}</p>
          <div className="flex flex-wrap gap-2">
            {game.tags.map((tag) => (
              <span key={tag} className={`border-[3px] border-slate-950 px-3 py-1 font-pixel text-xs ${tagClass[game.tone]}`}>
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {game.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className={`inline-flex min-h-12 items-center gap-2 border-[4px] border-slate-950 px-4 py-2 font-display text-lg font-black ${
                  link.primary ? primaryLinkClass[game.tone] : "bg-white text-slate-950"
                } transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#111827] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#62d5ff]`}
              >
                {link.primary ? <Play className="size-5 fill-current" /> : <MessageCircle className="size-5" />}
                {link.label}
                <ArrowUpRight className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f2e9] text-slate-950">
      <div className="site-grid fixed inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-6 sm:px-6 lg:px-8">
        <header className="grid min-h-[92vh] content-between gap-10">
          <nav className="flex items-center justify-between gap-4 border-b-[4px] border-slate-950 pb-5">
            <Link href="/" className="font-pixel text-xl text-slate-950 sm:text-2xl">
              VIBEGAME
            </Link>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center gap-2 border-[3px] border-slate-950 bg-white px-4 font-display text-base font-black shadow-[4px_4px_0_#111827] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111827] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#62d5ff]"
            >
              <MessageCircle className="size-5" />
              联系
            </a>
          </nav>

          <section className="grid items-end gap-10 lg:grid-cols-[1fr_380px]">
            <div>
              <p className="mb-5 inline-flex border-[4px] border-slate-950 bg-[#ffe45e] px-4 py-2 font-display text-lg font-black shadow-[5px_5px_0_#111827]">
                Sunhz 的个人游戏入口
              </p>
              <h1 className="max-w-5xl font-display text-[clamp(4rem,13vw,12rem)] font-black leading-[0.82] tracking-normal">
                Vibe
                <br />
                Game
              </h1>
            </div>
            <div className="grid gap-3">
              {siteSignals.map((signal) => {
                const Icon = signal.icon;

                return (
                  <div key={signal.label} className="flex items-center justify-between border-[4px] border-slate-950 bg-white p-4 shadow-[6px_6px_0_#111827]">
                    <span className="flex items-center gap-3 font-display text-lg font-black">
                      <Icon className="size-5" />
                      {signal.label}
                    </span>
                    <span className="font-pixel text-lg text-slate-600">{signal.value}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="grid gap-5 lg:grid-cols-12">
            {games.map((game, index) => (
              <GamePanel key={game.id} game={game} featured={index === 0} />
            ))}
          </section>
        </header>

        <section id="contact" className="grid scroll-mt-8 gap-6 border-y-[5px] border-slate-950 py-8 lg:grid-cols-[1fr_320px]">
          <div className="grid content-center gap-4">
            <p className="inline-flex w-fit items-center gap-2 border-[3px] border-slate-950 bg-[#62d5ff] px-3 py-1 font-display text-lg font-black">
              <Sparkles className="size-5" />
              找我聊游戏
            </p>
            <h2 className="font-display text-4xl font-black sm:text-6xl">反馈、试玩、合作，都可以从这里来。</h2>
            <p className="max-w-2xl text-lg font-semibold leading-8 text-slate-700">
              这个入口页先收纳两个已经上线的小作品。后续如果有新的实验、原型或正式游戏，也会继续往这里放。
            </p>
          </div>
          <div className="border-[5px] border-slate-950 bg-white p-4 shadow-arcade">
            <div className="relative mx-auto aspect-[480/846] w-full max-w-[220px] overflow-hidden border-[4px] border-slate-950 bg-slate-100">
              <Image src={contactInfo.qrSrc} alt={`${contactInfo.label} 联系二维码`} fill sizes="220px" className="object-cover" />
            </div>
            <p className="mt-4 text-center font-pixel text-sm text-slate-500">
              {contactInfo.label}: {contactInfo.value}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
