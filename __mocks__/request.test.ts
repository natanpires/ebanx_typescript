import { expect } from "chai";
import "mocha";
import ebanx from "../src";

const eb = new ebanx("integration_key", true, false);
const request = {
	name : "carlos test",
	email : "carlos@test.com",
	country : "br",
	payment_type_code : "boleto",
	merchant_payment_code : "123141dafefesf",
	currency_code : "BRL",
	amount : 423.00
}

describe('Request Operation With Hash', () => {
  eb.request (request, (_err, reply) => {
    it('Should return object', (done: () => void) => {
      expect(reply).to.be.an('object');
      done(); 
    });
    
    it('Method should be POST', (done: () => void) => {
      expect(reply.method).to.be.equal("POST");
      done();
    });

    it('URI should point to ws/request', (done: () => void) => {
      expect(reply.uri).to.be.equal("ws/request");
      done();
    });

    it('Params should have name', (done: () => void) => {
      expect(reply).to.have.property("name");
      done();
    });

    it('Params should have email', (done: () => void) => {
      expect(reply).to.have.property("email");
      done();
    });

    it('Params should have country', (done: () => void) => {
      expect(reply).to.have.property("country");
      done();
    });

    it('Params should have payment_type_code', (done: () => void) => {
      expect(reply).to.have.property("payment_type_code");
      done();
    });

    it('Params should have merchant_payment_code', (done: () => void) => {
      expect(reply).to.have.property("merchant_payment_code");
      done();
    });

    it('Params should have currency_code', (done: () => void) => {
      expect(reply).to.have.property("currency_code");
      done();
    });

    it('Params should have amount', (done: () => void) => {
      expect(reply).to.have.property("amount");
      done();
    });
  });
});