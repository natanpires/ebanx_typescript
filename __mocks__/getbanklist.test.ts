import { expect } from "chai";
import "mocha";
import ebanx, { GetBankList } from "../src";

const eb = new ebanx("integration_key", true, false);
const getBankList: GetBankList = {
  operation: "request",
  country: "br",
};

describe("GetBankList Operation", () => {
  eb.getbanklist(getBankList, (_err, reply) => {
    it("Should return object", (done: () => void) => {
      expect(reply).to.be.an("object");
      done();
    });
  });
});
