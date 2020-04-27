import { expect } from "chai";
import "mocha";
import ebanx, { Print } from "../src";

const eb = new ebanx("integration_key", true, false);
const hash: Print = { hash: "552c21d21c55dd815c92ca69d937603913f1e69153916b0f" };

describe("Print Operation", () => {
  eb.print(hash, (_err, reply) => {
    it("Should return object", (done: () => void) => {
      expect(reply).to.be.an("object");
      done();
    });

    it("Method should be GET", (done: () => void) => {
      expect(reply.method).to.be.equal("GET");
      done();
    });

    it("URI should point to print", (done: () => void) => {
      expect(reply.uri).to.be.equal("print");
      done();
    });

    it("Param must have hash", (done: () => void) => {
      expect(reply).to.have.property("hash");
      done();
    });
  });
});
