import { Request, Response } from 'express';
import { sequelize } from '../models';

export async function getHealth(_req: Request, res: Response) {
  let database = 'conectada';
  try {
    await sequelize.authenticate();
  } catch {
    database = 'desconectada';
  }

  res.json({ status: 'ok', database, timestamp: new Date().toISOString() });
}
