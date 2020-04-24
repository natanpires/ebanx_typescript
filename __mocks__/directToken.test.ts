import { expect } from "chai";
import "mocha";
import ebanx from "../src";

const eb = new ebanx("integration_key", true, false);
const direct = {
  payment: {
    name: "carlos test",
    email: "carlos@test.com",
    birth_date: "12/04/1979",
    document: "853.513.468.93",
    address: "Rua e",
    street_number: "1040",
    city: "Curitiba",
    state: "PR",
    zipcode: "82530000",
    country: "br",
    phone_number: "32329913",
    payment_type_code: "visa",
    merchant_payment_code: "123141dafefesf",
    currency_code: "BRL",
    amount_total: 423.0,
    creditcard: {
      token: "123",
    },
  },
};

describe("Direct Operation Credit Card Token", () => {
  eb.direct(direct, (_err, reply) => {
    it("Should test creditcard.token object", done => {
      expect(reply.payment.creditcard).to.have.property("token");
      done();
    });
  });
});
