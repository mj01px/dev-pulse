# DevPulse — GitHub Profile Analyzer

A React dashboard that analyzes any GitHub user's public activity: languages, starred repos, and repository overview.

## Preview

Search for any GitHub username and instantly see:
- Profile card with bio, location, and stats
- Top languages donut chart
- Most starred repositories bar chart
- Repository grid with last updated date

## Stack

- **React 19** + **TypeScript**
- **Vite** — bundler
- **Recharts** — data visualization
- **Tailwind CSS v4** — styling
- **GitHub REST API** — data source (no auth required)

## Quick Start

```bash
git clone https://github.com/mj01px/dev-pulse
cd dev-pulse
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Optional: GitHub Token

The GitHub API allows 60 requests/hour unauthenticated. To increase the limit:

1. Create a `.env.local` file at the project root
2. Add your token:

```env
VITE_GITHUB_TOKEN=ghp_your_token_here
```

3. The app will automatically use it for requests.

## Project Structure

```
src/
├── components/
│   ├── SearchBar.tsx       # Username input
│   ├── ProfileCard.tsx     # User info card
│   ├── LanguagesChart.tsx  # Donut chart (top languages)
│   ├── StarsChart.tsx      # Bar chart (most starred repos)
│   └── RepoList.tsx        # Repository grid
├── services/
│   └── github.ts           # GitHub API calls
├── types/
│   └── github.ts           # TypeScript interfaces
└── App.tsx                 # Main app + state
```

## Deploy

Deploy instantly on Vercel:

```bash
npm run build
# then drag the /dist folder to vercel.com/new
```
