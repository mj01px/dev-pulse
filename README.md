<div align="center">

<br/>

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=30&pause=1000&color=FFFFFF&center=true&vCenter=true&width=500&lines=DevPulse;Analyze.+Visualize.+Explore." alt="Typing SVG" />
</a>

<br/>

<p>
  <img src="https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/TypeScript-5-007ACC?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white"/>
  <img src="https://img.shields.io/badge/Recharts-22B5BF?style=flat-square&logo=chart.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vercel-deployed-000000?style=flat-square&logo=vercel&logoColor=white"/>
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square"/>
</p>

**[→ Live Demo](https://dev-pulse-tau.vercel.app/)**

</div>

<br/>

---

## `~/about`

```ts
const devPulse = {
  type:     "GitHub Profile Analyzer · Dashboard",
  stack:    ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Recharts"],
  data:     "GitHub REST API — no auth required",
  features: ["Profile card", "Top languages chart", "Most starred repos", "Repository grid"],
  author:   "Mauro Junior · github.com/mj01px",
} as const;
```

**DevPulse** is a React dashboard that analyzes any GitHub user's public activity. Search any username and instantly see a profile overview, top languages donut chart, most starred repositories bar chart, and a complete repository grid — all powered by the GitHub REST API with no authentication required.

```
src/
├── components/       # SearchBar, ProfileCard, LanguagesChart, StarsChart, RepoList
├── services/
│   └── github.ts     # GitHub API calls
├── types/
│   └── github.ts     # TypeScript interfaces
└── App.tsx           # Main app + state
```

---

## `~/features`

<table>
  <tr>
    <td valign="top" width="50%">
      <b>📊 Dashboard</b><br/><br/>
      <ul>
        <li>Profile card — bio, location & stats</li>
        <li>Top languages donut chart</li>
        <li>Most starred repositories bar chart</li>
        <li>Repository grid with last updated date</li>
      </ul>
    </td>
    <td valign="top" width="50%">
      <b>⚙️ Technical</b><br/><br/>
      <ul>
        <li>GitHub REST API — 60 req/h unauthenticated</li>
        <li>Optional token for higher rate limits</li>
        <li>No backend — fully client-side</li>
        <li>Deployed on Vercel</li>
      </ul>
    </td>
  </tr>
</table>

---

## `~/getting-started`

### Local

```bash
git clone https://github.com/mj01px/dev-pulse.git
cd dev-pulse
npm install && npm run dev     # → http://localhost:5173
```

### GitHub Token (optional)

The API allows 60 requests/hour unauthenticated. To increase the limit, create `.env.local` at the project root:

```env
VITE_GITHUB_TOKEN=ghp_your_token_here
```

---

## `~/stack`

<div align="center">

| Layer | Technologies |
|---|---|
| **UI** | ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) |
| **Styling** | ![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) |
| **Charts** | ![Recharts](https://img.shields.io/badge/Recharts-22B5BF?style=flat-square&logo=chart.js&logoColor=white) |
| **Build** | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) |
| **Data** | ![GitHub API](https://img.shields.io/badge/GitHub_API-181717?style=flat-square&logo=github&logoColor=white) |
| **Deploy** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) |

</div>

---

<div align="center">
  <br/>
  <sub>
    Built by <a href="https://github.com/mj01px"><strong>Mauro Junior</strong></a>
    &nbsp;·&nbsp;
    <a href="https://www.linkedin.com/in/mauroapjunior/">LinkedIn</a>
  </sub>
  <br/><br/>
</div>
