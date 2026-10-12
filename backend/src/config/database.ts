import { Sequelize } from 'sequelize';
import { env } from './env';

export const sequelize = new Sequelize(env.db.name, env.db.user, env.db.password, {
  host: env.db.host,
  port: env.db.port,
  dialect: 'postgres',
  logging: false,
});

export async function connectDatabase(): Promise<boolean> {
  try {
    await sequelize.authenticate();
    console.log(`Conectado a PostgreSQL (${env.db.name})`);
    return true;
  } catch (error) {
    console.error('No se pudo conectar a PostgreSQL:', (error as Error).message);
    return false;
  }
}
