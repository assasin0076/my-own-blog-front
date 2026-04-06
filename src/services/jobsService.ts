import api from '@/services/api';
import type { TJob } from '@/types/TJob';

export async function getJobs(): Promise<TJob[]> {
  const { data } = await api.get<TJob[]>(`/jobs`);
  return data;
}
