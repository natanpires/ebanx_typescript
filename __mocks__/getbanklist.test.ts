import { expect } from "chai";
import "mocha";
import ebanx, { models } from "../src";

const eb = new ebanx("integration_key", true, false);
const getBankList: models.GetBankList = {
  operation: "request",
  country: "br",
};

describe("GetBankList Operation", async () => {
  const reply = await eb.getbanklist(getBankList);

  it("Should return object", (done: () => void) => {
    expect(reply).to.be.an("object");
    done();
  });
});
