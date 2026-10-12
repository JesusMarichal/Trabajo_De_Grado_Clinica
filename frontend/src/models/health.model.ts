export interface HealthStatus {
  status: string;
  database: "conectada" | "desconectada";
  timestamp: string;
}
