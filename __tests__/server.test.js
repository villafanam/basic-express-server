'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('API Server', () => {
  test('handle bad route', async () => {
    const response = await request.get('/foo');

    expect(response.status).toEqual(404);
  });

  // test('handle bad method', async () => {
  //   const response = await request.get('/person/?name=Marco');
  //   expect(response.body.method).toEqual('GET');
  // });

  test('handle no name in query string', async () => {
    const response = await request.get('/person?name=');
    expect(response.status).toEqual(500);
  });

  test('handle name is in query string', async () => {
    const response = await request.get('/person/?name=Marco');
    expect(response.status).toEqual(200);
  });

  // test('handle output object is correct', async () => {
  //   const response = await request.get('/person/?name=Marco');
  //   let objPerson = {name: 'Marco'};
  //   expect(response.body.person).toEqual(objPerson);
  // });
});