import { expect } from "chai";
import "mocha";
import ebanx, { Capture } from "../src";

const eb = new ebanx("integration_key", true, false);
const hash: Capture = { hash: "552c21d21c55dd815c92ca69d937603913f1e69153916b0f" };
const merchant_payment_code: Capture = { merchant_payment_code: "1428955597" };

describe("Capture Operation With Hash", async () => {
  const reply = await eb.capture(hash);

  it("Should return object", (done: () => void) => {
    expect(reply).to.be.an("object");
    done();
  });

  it("Method should be GET", (done: () => void) => {
    expect(reply.method).to.be.equal("GET");
    done();
  });

  it("URI should point to ws/capture", (done: () => void) => {
    expect(reply.uri).to.be.equal("ws/capture");
    done();
  });

  it("Params must be hash", (done: () => void) => {
    expect(reply).to.have.property("hash");
    done();
  });
});

describe("Capture Operation With Merchant Payment Code", async () => {
  const reply = await eb.capture(merchant_payment_code);

  it("Should return object", (done: () => void) => {
    expect(reply).to.be.an("object");
    done();
  });

  it("Method should be GET", (done: () => void) => {
    expect(reply.method).to.be.equal("GET");
    done();
  });

  it("URI should point to ws/capture", (done: () => void) => {
    expect(reply.uri).to.be.equal("ws/capture");
    done();
  });

  it("Params must be merchant_payment_code", (done: () => void) => {
    expect(reply).to.have.property("merchant_payment_code");
    done();
  });
});
