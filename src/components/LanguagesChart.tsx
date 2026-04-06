import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import type { LanguageStat } from '../types/github';

const COLORS = [
  '#388bfd', '#f78166', '#3fb950', '#d2a8ff', '#ffa657',
  '#79c0ff', '#ff7b72', '#56d364', '#e3b341', '#bc8cff',
];

interface Props {
  languages: LanguageStat[];
}

export default function LanguagesChart({ languages }: Props) {
  if (languages.length === 0) {
    return (
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <h3 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-4">
          Top Languages
        </h3>
        <p className="text-[#6e7681] text-sm">No language data available.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
      <h3 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-4">
        Top Languages
      </h3>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={languages}
            dataKey="count"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={45}
            paddingAngle={3}
          >
            {languages.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: '#1c2128',
              border: '1px solid #30363d',
              borderRadius: 8,
              color: '#e6edf3',
              fontSize: 13,
            }}
            formatter={(value, name) => [`${value} repos`, name]}
          />
          <Legend
            formatter={(value) => (
              <span style={{ color: '#8b949e', fontSize: 12 }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
