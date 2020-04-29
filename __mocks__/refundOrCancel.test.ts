import { expect } from "chai";
import "mocha";
import ebanx, { models } from "../src";

const eb = new ebanx("integration_key", true, false);
const refund: models.RefundOrCancel = {
  hash: "552c21d21c55dd815c92ca69d937603913f1e69153916b0f",
  description: "Lorem ipsum dolor sit amet.",
};

describe("RefundOrCancel Operation", async () => {
  const reply = await eb.refundOrCancel(refund);

  it("Should return object", (done: () => void) => {
    expect(reply).to.be.an("object");
    done();
  });

  it("Method should be POST", (done: () => void) => {
    expect(reply.method).to.be.equal("POST");
    done();
  });

  it("URI should point to ws/refundOrCancel", (done: () => void) => {
    expect(reply.uri).to.be.equal("ws/refundOrCancel");
    done();
  });

  it("Params should have hash", (done: () => void) => {
    expect(reply).to.have.property("hash");
    done();
  });

  it("Params should have description", (done: () => void) => {
    expect(reply.description).to.be.equal(refund.description);
    done();
  });
});
