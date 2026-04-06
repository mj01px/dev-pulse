import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import type { RepoStat } from '../types/github';

interface Props {
  repos: RepoStat[];
}

export default function StarsChart({ repos }: Props) {
  const top = repos
    .filter((r) => r.stars > 0)
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 8);

  if (top.length === 0) {
    return (
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <h3 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-4">
          Most Starred Repos
        </h3>
        <p className="text-[#6e7681] text-sm">No starred repositories yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
      <h3 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-4">
        Most Starred Repos
      </h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={top} layout="vertical" margin={{ left: 8, right: 16 }}>
          <XAxis
            type="number"
            tick={{ fill: '#6e7681', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={110}
            tick={{ fill: '#8b949e', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              background: '#1c2128',
              border: '1px solid #30363d',
              borderRadius: 8,
              color: '#e6edf3',
              fontSize: 13,
            }}
            cursor={{ fill: 'rgba(56,139,253,0.08)' }}
            formatter={(value) => [`${value} ★`, 'Stars']}
          />
          <Bar dataKey="stars" radius={[0, 4, 4, 0]}>
            {top.map((_, index) => (
              <Cell
                key={index}
                fill={index === 0 ? '#e3b341' : '#388bfd'}
                fillOpacity={1 - index * 0.08}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
