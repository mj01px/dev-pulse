import axios from 'axios';
import type { GithubUser, GithubRepo } from '../types/github';

const token = import.meta.env.VITE_GITHUB_TOKEN as string | undefined;

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github+json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  },
});

export async function fetchUser(username: string): Promise<GithubUser> {
  const { data } = await api.get<GithubUser>(`/users/${username}`);
  return data;
}

export async function fetchRepos(username: string): Promise<GithubRepo[]> {
  const { data } = await api.get<GithubRepo[]>(`/users/${username}/repos`, {
    params: { per_page: 100, sort: 'updated' },
  });
  return data;
}
