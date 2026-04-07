import { useState } from 'react';
import { fetchUser, fetchRepos } from './services/github';
import type { GithubUser, GithubRepo, LanguageStat, RepoStat } from './types/github';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';
import LanguagesChart from './components/LanguagesChart';
import StarsChart from './components/StarsChart';
import RepoList from './components/RepoList';

function computeLanguages(repos: GithubRepo[]): LanguageStat[] {
  const counts: Record<string, number> = {};
  for (const repo of repos) {
    if (repo.language) counts[repo.language] = (counts[repo.language] ?? 0) + 1;
  }
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([name, count]) => ({
      name,
      count,
      percentage: Math.round((count / total) * 100),
    }));
}

function computeRepoStats(repos: GithubRepo[]): RepoStat[] {
  return repos.map((r) => ({
    name: r.name,
    stars: r.stargazers_count,
    forks: r.forks_count,
  }));
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function App() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  async function handleSearch(username: string) {
    setStatus('loading');
    setError('');
    try {
      const [userData, reposData] = await Promise.all([
        fetchUser(username),
        fetchRepos(username),
      ]);
      setUser(userData);
      setRepos(reposData);
      setStatus('success');
    } catch (err: unknown) {
      const httpStatus = (err as { response?: { status?: number } })?.response?.status;
      setError(httpStatus === 404 ? `User "${username}" not found.` : 'Failed to fetch data. Try again.');
      setStatus('error');
    }
  }

  const languages = repos.length > 0 ? computeLanguages(repos) : [];
  const repoStats = repos.length > 0 ? computeRepoStats(repos) : [];

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      {}
      <header className="border-b border-[#21262d] py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg height="24" width="24" viewBox="0 0 16 16" fill="#e6edf3">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
            </svg>
            <span className="font-semibold text-[#e6edf3]">DevPulse</span>
          </div>
          <span className="text-xs text-[#6e7681]">GitHub Analytics</span>
        </div>
      </header>

      {}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#e6edf3] mb-3">
            GitHub Profile Analyzer
          </h1>
          <p className="text-[#8b949e] mb-8">
            Explore any developer's stats, languages, and repositories.
          </p>
          <div className="flex justify-center">
            <SearchBar onSearch={handleSearch} loading={status === 'loading'} />
          </div>
        </div>

        {}
        {status === 'error' && (
          <div className="bg-[#21262d] border border-[#f85149] rounded-xl p-4 text-[#f85149] text-sm text-center mb-8">
            {error}
          </div>
        )}

        {}
        {status === 'success' && user && (
          <div className="flex flex-col gap-6">
            <ProfileCard user={user} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LanguagesChart languages={languages} />
              <StarsChart repos={repoStats} />
            </div>
            <RepoList repos={repos} />
          </div>
        )}

        {}
        {status === 'idle' && (
          <div className="text-center text-[#6e7681] text-sm mt-4">
            Try{' '}
            <button
              onClick={() => handleSearch('mj01px')}
              className="text-[#388bfd] hover:underline cursor-pointer"
            >
              mj01px
            </button>{' '}
            or{' '}
            <button
              onClick={() => handleSearch('torvalds')}
              className="text-[#388bfd] hover:underline cursor-pointer"
            >
              torvalds
            </button>
          </div>
        )}
      </main>

      <footer className="border-t border-[#21262d] py-4 px-6 text-center text-xs text-[#6e7681]">
        Built with React + TypeScript · GitHub REST API
      </footer>
    </div>
  );
}
