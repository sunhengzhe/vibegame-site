# Vibegame Site

Sunhz 的个人游戏入口页，收纳「象棋大乱斗」和「我画我猜」。

## 本地开发

```bash
pnpm install
pnpm dev
```

## Cloudflare Pages

这是纯静态入口页，使用 Next.js Static Export 部署到 Cloudflare Pages。

Cloudflare Pages 构建设置：

- Framework preset: `Next.js (Static HTML Export)`
- Production branch: `main`
- Build command: `pnpm build`
- Build output directory: `out`

也可以本地直传：

```bash
pnpm deploy:cloudflare
```

## Cloudflare Workers Static Assets

如果 Cloudflare 项目使用 Workers Builds，并且 Deploy command 是 `npx wrangler deploy`，仓库里的 `wrangler.jsonc` 会把 `out` 作为静态资源目录发布。

Workers Builds 设置：

- Build command: `pnpm build`
- Deploy command: `npx wrangler deploy`
