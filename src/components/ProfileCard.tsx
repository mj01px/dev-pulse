import type { GithubUser } from '../types/github';

interface Props {
  user: GithubUser;
}

function StatBadge({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center bg-[#161b22] border border-[#30363d] rounded-lg px-5 py-3">
      <span className="text-2xl font-bold text-[#e6edf3]">
        {value.toLocaleString()}
      </span>
      <span className="text-xs text-[#8b949e] uppercase tracking-wider mt-1">
        {label}
      </span>
    </div>
  );
}

export default function ProfileCard({ user }: Props) {
  const joinYear = new Date(user.created_at).getFullYear();

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 flex flex-col sm:flex-row gap-6 w-full">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full border-2 border-[#30363d] self-start shrink-0"
      />
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-baseline gap-2 mb-1">
          <h2 className="text-xl font-bold text-[#e6edf3]">
            {user.name || user.login}
          </h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[#388bfd] hover:underline"
          >
            @{user.login}
          </a>
          <span className="text-xs text-[#6e7681] ml-auto">
            Joined {joinYear}
          </span>
        </div>

        {user.bio && (
          <p className="text-sm text-[#8b949e] mb-4">{user.bio}</p>
        )}

        <div className="flex flex-wrap gap-2 mb-4 text-xs text-[#8b949e]">
          {user.company && <span>🏢 {user.company}</span>}
          {user.location && <span>📍 {user.location}</span>}
          {user.blog && (
            <a
              href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#388bfd] hover:underline"
            >
              🔗 {user.blog}
            </a>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3">
          <StatBadge label="Repos" value={user.public_repos} />
          <StatBadge label="Followers" value={user.followers} />
          <StatBadge label="Following" value={user.following} />
        </div>
      </div>
    </div>
  );
}
