const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { MongoClient } = require('mongodb');
chai.use(chaiHttp);

const server = require('../index');
const { getConnection } = require('./connectionMock');
const { expect } = chai;

let connectionMock;


describe('GET /api/posts', () => {

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    MongoClient.connect.restore();
  });


  describe('Quando não é passado um JWT para autenticação', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .get('/api/posts')
        .set('authorization', '');
    })

    it('retorna código de status "401"', () => {
      expect(response).to.have.status(401);
    });

    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('objeto de resposta possui a propriedade "error"', () => {
      expect(response.body).to.have.property('error');
    });

    it('a propriedade "error" tem o valor "Token não encontrado ou informado"', () => {
      expect(response.body.error).to.be.equal('Token não encontrado ou informado');
    });
  })

  describe('Quando os posts são buscados com sucesso', () => {
    let response;

    before(async () => {
      const usersCollection = connectionMock.db('jwt_exercise').collection('users');
      await usersCollection.insertOne({
        username: 'user-fake',
        password: 'senha-fake'
      })

      const token = await chai.request(server)
        .post('/api/login')
        .send({
          username: 'user-fake',
          password: 'senha-fake'
        })
        .then((res) => res.body.message);

      response = await chai.request(server)
        .get('/api/posts')
        .set('authorization', token);
    });

    it('retorna código de status "200"', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('objeto de resposta possui a propriedade "mockPosts"', () => {
      expect(response.body).to.have.property('mockPosts');
    });

    it('a propriedade "mockPosts" é um array', () => {
      expect(response.body.mockPosts).to.be.an('array');
    });
  })
})