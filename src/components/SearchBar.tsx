import { useState, type FormEvent } from 'react';

interface Props {
  onSearch: (username: string) => void;
  loading: boolean;
}

export default function SearchBar({ onSearch, loading }: Props) {
  const [value, setValue] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (trimmed) onSearch(trimmed);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-lg">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="GitHub username..."
        disabled={loading}
        className="flex-1 bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 text-[#e6edf3] placeholder-[#6e7681] focus:outline-none focus:border-[#388bfd] transition-colors disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={loading || !value.trim()}
        className="bg-[#238636] hover:bg-[#2ea043] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-5 py-3 rounded-lg transition-colors"
      >
        {loading ? 'Loading...' : 'Search'}
      </button>
    </form>
  );
}
