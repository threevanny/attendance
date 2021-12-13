const app = require('../src/app')
const request = require('supertest')

describe('GET /', ()=> {
  test('Deberia responder con el codigo 200', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })
  test('Deberia responder con el codigo 200', async ()=> {
    const response = await request(app).get('/api/users').send()
    expect(response.statusCode).toBe(200)
  })
  test('Deberia reponder con un Array de usuarios', async () => {
    const response = await request(app).get('/api/users').send()
    expect(response.body).toBeInstanceOf(Array)
  })
})