import { expect } from "chai";
import "mocha";
import ebanx, { models } from "../src";

const eb = new ebanx("integration_key", true, false);
const hash: models.Cancel = { hash: "1234" };

describe("Cancel Operation", async () => {
  const reply = await eb.cancel(hash);

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
