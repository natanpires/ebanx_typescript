import { expect } from "chai";
import "mocha";
import ebanx, { Query } from "../src";

const eb = new ebanx("integration_key", true, false);
const hash: Query = { hash: "552c21d21c55dd815c92ca69d937603913f1e69153916b0f" };
const merchant_payment_code: Query = { merchant_payment_code: "1428955597" };

describe("Query Operation With Hash", async () => {
  const reply = await eb.query(hash);

  it("Should return object", (done: () => void) => {
    expect(reply).to.be.an("object");
    done();
  });

  it("Method should be GET", (done: () => void) => {
    expect(reply.method).to.be.equal("GET");
    done();
  });

  it("URI should point to ws/query", (done: () => void) => {
    expect(reply.uri).to.be.equal("ws/query");
    done();
  });

  it("Params must be hash", (done: () => void) => {
    expect(reply).to.have.property("hash");
    done();
  });
});

describe("Query Operation With merchant_payment_code", async () => {
  const reply = await eb.query(merchant_payment_code);
  it("Should return object", (done: () => void) => {
    expect(reply).to.be.an("object");
    done();
  });

  it("Method should be GET", (done: () => void) => {
    expect(reply.method).to.be.equal("GET");
    done();
  });

  it("URI should point to ws/query", (done: () => void) => {
    expect(reply.uri).to.be.equal("ws/query");
    done();
  });

  it("Params must be merchant_payment_code", (done: () => void) => {
    expect(reply).to.have.property("merchant_payment_code");
    done();
  });
});
