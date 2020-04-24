import { expect } from "chai";
import "mocha";
import ebanx from "../src";
import { default as utils } from "../src/Config";

const eb = new ebanx("integration_key", true, true);

describe("Configuration", () => {
  it("Integration Key should be setted", (done: () => void) => {
    expect(eb.settings.integrationKey).to.be.equal(utils.getIntegrationKey());
    done();
  });

  it("Test Mode Should be Setted", (done: () => void) => {
    expect(eb.settings.testMode).to.be.equal(utils.getTestMode());
    done();
  });

  it("EndPoint return for testMode false and true", (done: () => void) => {
    expect(utils.getEndPoint()).to.be.equal("https://sandbox.ebanxpay.com/");
    eb.setTestMode(false);
    expect(utils.getEndPoint()).to.be.equal("https://api.ebanxpay.com/");
    done();
  });
});
