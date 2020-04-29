import { expect } from "chai";
import "mocha";
import ebanx, { Exchange } from "../src";

const eb = new ebanx("integration_key", true, false);
const currency: Exchange = { currency_code: "USD", currency_base: "BRL" };

describe("Exchange Operation", async () => {
  const reply = await eb.exchange(currency);

  it("Should return object", (done: () => void) => {
    expect(reply).to.be.an("object");
    done();
  });

  it("Method should be GET", (done: () => void) => {
    expect(reply.method).to.be.equal("GET");
    done();
  });

  it("URI should point to ws/exchange", (done: () => void) => {
    expect(reply.uri).to.be.equal("ws/exchange");
    done();
  });

  it("Param must have currency_code", (done: () => void) => {
    expect(reply).to.have.property("currency_code");
    done();
  });

  it("Param must have currency_base", (done: () => void) => {
    expect(reply).to.have.property("currency_base");
    done();
  });
});
