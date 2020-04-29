import { expect } from "chai";
import "mocha";
import ebanx, { Token } from "../src";

const eb = new ebanx("integration_key", true, false);
const creditcard: Token = {
  country: "br",
  payment_type_code: "visa",
  creditcard: {
    card_number: "4111111111111111",
    card_name: "Jose da Silva",
    card_due_date: "10/2021",
    card_cvv: "123",
  },
};

describe("Token Operation", async () => {
  const reply = await eb.token(creditcard);

  it("Should return object", (done: () => void) => {
    expect(reply).to.be.an("object");
    done();
  });

  it("Method should be POST", (done: () => void) => {
    expect(reply.method).to.be.equal("POST");
    done();
  });

  it("URI should point to ws/token", (done: () => void) => {
    expect(reply.uri).to.be.equal("ws/token");
    done();
  });

  it("Params should have payment_type_code", (done: () => void) => {
    expect(reply).to.have.property("payment_type_code");
    done();
  });

  it("Params should have creditcard.card_number", (done: () => void) => {
    expect(reply.creditcard).to.have.property("card_number");
    done();
  });

  it("Params should have creditcard.card_name", (done: () => void) => {
    expect(reply.creditcard).to.have.property("card_name");
    done();
  });

  it("Params should have creditcard.card_due_date", (done: () => void) => {
    expect(reply.creditcard).to.have.property("card_due_date");
    done();
  });

  it("Params should have creditcard.card_cvv", (done: () => void) => {
    expect(reply.creditcard).to.have.property("card_cvv");
    done();
  });
});
