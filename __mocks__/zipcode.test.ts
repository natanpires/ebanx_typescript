import { expect } from "chai";
import "mocha";
import ebanx, { Zipcode } from "../src";

const eb = new ebanx("integration_key", true, false);
const zipcode: Zipcode = { zipcode: "82530000" };

describe("Zipcode Operation", async () => {
  const reply = await eb.zipcode(zipcode);

  it("Should return object", (done: () => void) => {
    expect(reply).to.be.an("object");
    done();
  });

  it("Method should be GET", (done: () => void) => {
    expect(reply.method).to.be.equal("GET");
    done();
  });

  it("URI should point to ws/zipcode", (done: () => void) => {
    expect(reply.uri).to.be.equal("ws/zipcode");
    done();
  });

  it("Params must be zipcode", (done: () => void) => {
    expect(reply).to.have.property("zipcode");
    done();
  });
});
