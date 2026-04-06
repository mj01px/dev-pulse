import type { GithubRepo } from '../types/github';

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  CSS: '#563d7c',
  HTML: '#e34c26',
  'Jupyter Notebook': '#DA5B0B',
  C: '#555555',
  'C++': '#f34b7d',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Swift: '#fa7343',
  Kotlin: '#A97BFF',
  Shell: '#89e051',
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

interface Props {
  repos: GithubRepo[];
}

export default function RepoList({ repos }: Props) {
  const sorted = [...repos]
    .filter((r) => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 9);

  return (
    <div>
      <h3 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-4">
        Repositories
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {sorted.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="bg-[#161b22] border border-[#30363d] hover:border-[#388bfd] rounded-xl p-4 flex flex-col gap-2 transition-colors group"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="text-sm font-medium text-[#388bfd] group-hover:underline truncate">
                {repo.name}
              </span>
              {repo.stargazers_count > 0 && (
                <span className="text-xs text-[#8b949e] shrink-0">
                  ★ {repo.stargazers_count}
                </span>
              )}
            </div>

            {repo.description && (
              <p className="text-xs text-[#8b949e] line-clamp-2 flex-1">
                {repo.description}
              </p>
            )}

            <div className="flex items-center justify-between mt-auto pt-1">
              <div className="flex items-center gap-1.5">
                {repo.language && (
                  <>
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: LANG_COLORS[repo.language] ?? '#8b949e',
                      }}
                    />
                    <span className="text-xs text-[#8b949e]">
                      {repo.language}
                    </span>
                  </>
                )}
              </div>
              <span className="text-xs text-[#6e7681]">
                {timeAgo(repo.updated_at)}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
