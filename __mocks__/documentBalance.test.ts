import { expect } from "chai";
import "mocha";
import ebanx from "../src";

const eb = new ebanx("integration_key", true, false);
const currency = {currency_code : "USD", document : "853.513.468.93"};

describe('DocumentBalance Operation', () => {
  eb.documentBalance (currency, (_err, reply) => {
    it('Should return object', (done: () => void) => {
      expect(reply).to.be.an('object');
      done();
    });
    
    it('Method should be GET', (done: () => void) => {
      expect(reply.method).to.be.equal("GET");
      done();
    });

    it('URI should point to ws/documentbalance', (done: () => void) => {
      expect(reply.uri).to.be.equal("ws/documentbalance");
      done();
    });

    it('Param must have currency_code', (done: () => void) => {
      expect(reply).to.have.property("currency_code");
      done();
    });

    it('Param must have document', (done: () => void) => {
      expect(reply).to.have.property("document");
      done();
    });
  });
});