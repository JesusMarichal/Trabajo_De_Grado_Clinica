import request from 'supertest';
import app from '../../src/app';
import { sequelize } from '../../src/models';

afterAll(() => sequelize.close());

describe('GET /api/health', () => {
  it('responde con status ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
