const sinon = require('sinon');
const { expect } = require('chai');

const MoviesController = require('../../controllers/movieController');

describe('Ao chamar o controller de getAll', () => {
    describe('quando não existem filmes no banco de dados', async () => {
      const response = {};
      const request = {};
  
      before(() => {
        request.body = {};

        response.status = sinon.stub()
          .returns(response);
        response.json = sinon.stub()
          .returns();
      })
  
      after(() => {
        //
      })
  
      it('é chamado o método "status" passando o código 200', async () => {
        await MoviesController.getAll(request, response);
  
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
  
      it('é chamado o método "json" passando um array', async () => {
        await MoviesController.getAll(request, response);
  
        expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
      });
  
    });
  
    describe('quando existem filmes no banco de dados', async () => {
      const response = {};
      const request = {};
  
      before(() => {
        request.body = {};
  
        response.status = sinon.stub()
          .returns(response);
        response.json = sinon.stub()
          .returns();
      })
  
      after(() => {
        //
      })
  
      it('é chamado o método "status" passando o código 200', async () => {
        await MoviesController.getAll(request, response);
  
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
  
      it('é chamado o método "json" passando um array', async () => {
        await MoviesController.getAll(request, response);
  
        expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
      });
    });
  });