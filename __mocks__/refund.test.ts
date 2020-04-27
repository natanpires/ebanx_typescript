import { expect } from "chai";
import "mocha";
import ebanx, { Refund } from "../src";

const eb = new ebanx("integration_key", true, false);
const refund: Refund = {
  hash: "552c21d21c55dd815c92ca69d937603913f1e69153916b0f",
  description: "Lorem ipsum dolor sit amet.",
  amount: "1.00",
  operation: "request",
};

describe("Refund Operation", () => {
  eb.refund(refund, (_err, reply) => {
    it("Should return object", (done: () => void) => {
      expect(reply).to.be.an("object");
      done();
    });

    it("Method should be POST", (done: () => void) => {
      expect(reply.method).to.be.equal("POST");
      done();
    });

    it("URI should point to ws/refund", (done: () => void) => {
      expect(reply.uri).to.be.equal("ws/refund");
      done();
    });

    it("Params should have hash", (done: () => void) => {
      expect(reply).to.have.property("hash");
      done();
    });

    it("Params should have description", (done: () => void) => {
      expect(reply).to.have.property("description");
      done();
    });

    it("Params should have amount", (done: () => void) => {
      expect(reply).to.have.property("amount");
      done();
    });

    it("Params should have operation", (done: () => void) => {
      expect(reply).to.have.property("operation");
      done();
    });
  });
});

describe("Refund Operation Cancel", () => {
  const refund: Refund = {
    hash: "552c21d21c55dd815c92ca69d937603913f1e69153916b0f",
    description: "Lorem ipsum dolor sit amet.",
    amount: "1.00",
    operation: "cancel",
    refund_id: 123,
  };
  eb.refund(refund, (_err, reply) => {
    it("Should test operation", (done: () => void) => {
      expect(reply).to.have.property("refund_id");
      done();
    });
  });
});
