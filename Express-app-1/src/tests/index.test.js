const { describe, it, expect } = require('@jest/globals'); // optional

// ********
// ********
// Supertest is a Node.js library that lets you test HTTP endpoints (APIs) without manually starting the server.

// import the server 
const server = require('../index.js');
// import the supertest
const supertest = require('supertest');
// pasing the server in the supertest
const request = supertest(server);


describe('User Endpoints', () => {

  it('GET /user should show all users', async () => {
    const res = await request.get('/users');
      expect(res.status).toEqual(200);
      expect(res.body).toHaveProperty('users')
  });

});


describe("Testing /sum Api", ()=>{

    it("should give 1+2 equal to 3", async()=>{
        const res= await request.get('/sum').send({
            a: 1,
            b: 2
        })
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    })
})