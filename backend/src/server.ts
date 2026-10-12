import app from './app';
import { env } from './config/env';
import { connectDatabase } from './config/database';

async function main() {
  await connectDatabase();

  app.listen(env.port, () => {
    console.log(`API escuchando en http://localhost:${env.port}/api`);
  });
}

main();
