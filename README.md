# Ombygning

Lille Next.js-site til overblik over ombygning: status, ugeplan, flaskehalse og faggrupper.

## Live link (automatisk)

Projektet er sat op til automatisk deployment på **GitHub Pages** via workflowen i `.github/workflows/deploy.yml`.

Når ændringer merges til `main`, bliver sitet bygget og lagt online automatisk.

- Bruger-repo (fx `brugernavn.github.io`): `https://brugernavn.github.io/`
- Projektrepo (fx `brugernavn/ombygning`): `https://brugernavn.github.io/ombygning/`

> Den præcise URL står i workflow-run under environment `github-pages`.

## Kør lokalt

```bash
npm install
npm run dev
```

Åbn `http://localhost:3000`.

## Scripts

- `npm run dev` – start dev-server
- `npm run build` – produktionsbuild (eksporterer også statisk site til `out/`)
- `npm run start` – kør produktionsserver
