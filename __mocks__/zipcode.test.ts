import { expect } from "chai";
import "mocha";
import ebanx from "../src";

const eb = new ebanx("integration_key", true, false);
const zipcode = {zipcode : "82530000"};

describe('Zipcode Operation', () => {
  eb.zipcode(zipcode, (_err, reply) => {
    it('Should return object', (done: () => void) => {
      expect(reply).to.be.an('object');
      done();
    });

    it('Method should be GET', (done: () => void) => {
      expect(reply.method).to.be.equal("GET");
      done();
    });

    it('URI should point to ws/zipcode', (done: () => void) => {
      expect(reply.uri).to.be.equal("ws/zipcode");
      done();
    });

    it('Params must be zipcode', (done: () => void) => {
      expect(reply).to.have.property("zipcode");
      done();  
    });
  });
});