const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { MongoClient } = require('mongodb');

chai.use(chaiHttp);

const server = require('../index');
const { getConnection } = require('./connectionMock');
const { expect } = chai;

let connectionMock;

describe('POST /api/login', () => {

    before(async () => {
        connectionMock = await getConnection();
        sinon.stub(MongoClient, 'connect').resolves(connectionMock);
    });

    after(async () => {
        MongoClient.connect.restore();
    });

    describe('Quando não é passado usuário e senha', () => {
        let response;

        before(async () => {
            response = await chai.request(server)
              .post('/api/login')
              .send({});
        });

        it('retorna código de status "401"', () => {
            expect(response).to.have.status(401);
        });  
        
        it('retorna um objeto no body', () => {
            expect(response.body).to.be.an('object');
        });

        it('objeto de resposta possui a propriedade "message"', () => {
            expect(response.body).to.have.property('message');
        });
      
        it('a propriedade "message" tem o valor "É necessário usuário e senha para fazer login"', () => {
            expect(response.body.message).to.be.equals('É necessário usuário e senha para fazer login');
        }); 
    });

    describe('Usuário não existe ou senha inválida', () => {
        let response;

        before(async () => {
            response = await chai.request(server)
              .post('/api/login')
              .send({
                username: 'user-fake2',
                password: 'senha-fake2'
            });
        })
        
        it('retorna código de status "401"', () => {
            expect(response).to.have.status(401);
        });
        
        it('retorna um objeto no body', () => {
            expect(response.body).to.be.an('object');
        });
        
        it('objeto de resposta possui a propriedade "message"', () => {
            expect(response.body).to.have.property('message');
        });
        
        it('a propriedade "message" tem o valor "Usuário não existe ou senha inválida"', () => {
            expect(response.body.message).to.be.equals('Usuário não existe ou senha inválida');
        });
    });

    describe('Quando login é feito com sucesso', () => {

        before(async () => {
            const usersCollection = connectionMock.db('jwt_exercise').collection('users');
            await usersCollection.insertOne({
              username: 'user-fake',
              password: 'senha-fake'
            })
        
            response = await chai.request(server)
              .post('/api/login')
              .send({
                username: 'user-fake',
                password: 'senha-fake'
            });
        });
        
        it('retorna código de status "200"', () => {
            expect(response).to.have.status(200);
        });
        
        it('retorna um objeto no body', () => {
            expect(response.body).to.be.an('object');
        });
        
        it('objeto de resposta possui a propriedade "token"', () => {
            expect(response.body).to.have.property('token');
        });
        
        it('a propriedade "message" não pode ser vazia', () => {
            expect(response.body).to.have.property('token');
        });             
    }        
)});