const request = require('supertest');
const app = require('../index');

describe('Roles API', () => {
  it('should get all roles', async () => {
    const res = await request(app).get('/api/roles');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should get a role by id', async () => {
    const res = await request(app).get('/api/roles/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Superadmin');
  });

  it('should return 404 for non-existent role', async () => {
    const res = await request(app).get('/api/roles/999');
    expect(res.statusCode).toBe(404);
  });

  it('should verify role properties', async () => {
    const res = await request(app).get('/api/roles');
    const role = res.body[0];
    
    expect(role).toHaveProperty('id');
    expect(role).toHaveProperty('name');
    expect(role).toHaveProperty('type');
    expect(role).toHaveProperty('dateCreated');
    expect(role).toHaveProperty('status');
    expect(role).toHaveProperty('lastActive');
  });
});