"use strict"

require('dotenv').config();
const supertest = require("supertest");
const {server} = require("../src/server.js");
const supergoose  = require("@code-fellows/supergoose");
// const request = supertest(server);

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const request = supergoose(server);

// let id;
// describe('api server', () => {
//   it('should be able to create a person on POST /person', async () => {
//     const obj = {
//       name: 'test',
//       quantity: 'test',
//     };
//     const response = await request.post('/api/v1/person').send(obj);
//     expect(response.status).toEqual(201);
//     expect(response.body.name).toEqual('test');
//     id = response.body._id;
//   });
//   it('should be able to update a person on PUT /person', async () => {
//     const response = await request.put(`/api/v1/person/${id}`).send({
//       name: 'test',
//       quantity: 'test',
//     });
//     expect(response.status).toEqual(200);
//     expect(response.body.name).toEqual('test');
//   });
//   it('should be able to get a person on Get /person/:id', async () => {
//     const response = await request.get(`/api/v1/person/${id}`);
//     console.log('HIII', response.body);
//     expect(response.status).toEqual(200);
//     expect(response.body.name).toEqual('test');
//   });
// });


//food testing
let id;
describe("Food Testing", () => {
  
    it("Post", async() => {
      const response = await request.post("/api/v1/food/").send({
              name: 'shawerma'
      });
      
      expect(response.body.name).toEqual('shawerma');
      id =response.body._id;
      
    });
    
    it(' PUT ', async () => {
        const response = await request.put(`/api/v1/food/${id}`).send({
          name: 'test'
        });
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('test');
      });

      it(' Get ', async () => {
        const response = await request.get(`/api/v1/food/${id}`)
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('test');
      });

      it(' Delete ', async () => {
        const response = await request.delete(`/api/v1/food/${id}`)
        expect(response.status).toEqual(200);
        expect(response.body).toEqual(null);
      });
  
  });



  // clothes testing


 
describe("Clothes Testing", () => {

    it("Post", async() => {
      const response = await request.post("/api/v2/clothes/").send({
          name : 'boots'
      });
      expect(response.body.name).toEqual('boots');
      id =response.body._id;
      
    });
    

    
    it(' PUT ', async () => {
        const response = await request.put(`/api/v2/clothes/${id}`).send({
          name: 'test'
        });
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('test');
      });
      
      it(' Get ', async () => {
        const response = await request.get(`/api/v2/clothes/${id}`)
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('test');
      });

      
      it(' Delete ', async () => {
        const response = await request.delete(`/api/v2/clothes/${id}`)
        expect(response.status).toEqual(200);
        expect(response.body).toEqual(null);
      });
  
  });