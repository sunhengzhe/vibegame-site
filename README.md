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
