const db = require("../data/dbConfig")
const server = require('./server')
const request = require('supertest')

describe('POST /api/auth/login', () => {
  test('[1] responds with 400 if username is missing', async () => {
    let newUser = { username: 'mark'}
    let res = await request(server).post('/api/auth/login').send(newUser)
    expect(res.status).toBe(400)
  })
  test(`[2] responds with 400 if password is missing`, async () => {
let newPassword = {password: 'ababab'}
let res = await request(server).post('/api/auth/login').send(newPassword)
expect(res.status).toBe(400)
  })
})