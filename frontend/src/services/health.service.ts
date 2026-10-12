import { api } from "@/lib/api";
import type { HealthStatus } from "@/models/health.model";

export async function getHealth(): Promise<HealthStatus> {
  const { data } = await api.get<HealthStatus>("/health");
  return data;
}
