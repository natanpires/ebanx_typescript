import { expect } from "chai";
import "mocha";
import ebanx, { models } from "../src";

const eb = new ebanx("integration_key", true, false);
const cardBin: models.CardBin = {
  country: "MX",
};

describe("CardBin Operation", async () => {
  const reply = await eb.cardbin(cardBin);

  it("Should return object", (done: () => void) => {
    expect(reply).to.be.an("object");
    done();
  });
});
