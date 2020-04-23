import { expect } from "chai";
import "mocha";
import ebanx from "../src";

const eb = new ebanx("integration_key", true, false);
const hash = { hash: "1234" };

describe("Cancel Operation", () => {
  eb.cancel(hash, (_err, reply) => {
    it("Should return object", (done: () => void) => {
      expect(reply).to.be.an("object");
      done();
    });

    it("Method should be POST", (done: () => void) => {
      expect(reply.method).to.be.equal("POST");
      done();
    });

    it("URI should point to ws/cancel", (done: () => void) => {
      expect(reply.uri).to.be.equal("ws/cancel");
      done();
    });

    it("Params must be hash", (done: () => void) => {
      expect(reply).to.have.property("hash");
      done();
    });
  });
});