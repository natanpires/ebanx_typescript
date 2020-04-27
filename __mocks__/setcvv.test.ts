import { expect } from "chai";
import "mocha";
import ebanx, { SetCVV } from "../src";

const eb = new ebanx("integration_key", true, false);
const setcvv: SetCVV = {
  token:
    "805c49a8c606b4f2d53fad5aa688ec6c3aa247b83ac2146ee148e328244670b16f5cb719766b3a82e902387670958e71c323413c62df5ce975c1abf99d2049c6",
  card_cvv: "123",
};

describe("SetCVV", () => {
  eb.setcvv(setcvv, (_err, reply) => {
    it("Should return object", (done: () => void) => {
      expect(reply).to.be.an("object");
      done();
    });
  });
});
