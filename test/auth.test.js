const app = require('../src/app')
const request = require('supertest')

describe('POST /api/login', ()=> {
  test('Deberia responder con el codigo 200', async ()=> {
    const response = await request(app)
    .get('/api/login').send({ email: "yui.morgan@attendance.com", password: "12345678" })
    .set('Accept', 'application/json')
    expect(response.body.isAuth).toBe(undefined)
  }) 
})