import { expect } from "chai";
import "mocha";
import ebanx, { FxToken } from "../src";

const eb = new ebanx("integration_key", true, false);

const fxtoken: FxToken = {
  country: "br",
  currency_from: "EUR",
  currency_to: "BRL",
};

describe("FxToken Operation", async () => {
  const reply = await eb.fxtoken(fxtoken);
  it("Should return object", (done: () => void) => {
    expect(reply).to.be.an("object");
    done();
  });
});
