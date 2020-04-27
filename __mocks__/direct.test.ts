import { expect } from "chai";
import "mocha";
import ebanx, { Direct } from "../src";

const eb = new ebanx("integration_key", true, false);
const direct: Direct = {
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
    instalments: 1,
    amount_total: 423.0,
    creditcard: {
      card_number: "4111111111111111",
      card_name: "Jose da Silva",
      card_due_date: "10/2018",
      card_cvv: "123",
    },
  },
};

describe("Direct Operation Credit Card", () => {
  eb.direct(direct, (_err, reply) => {
    it("Should test creditcard object", (done: () => void) => {
      expect(reply.payment).to.have.property("creditcard");
      done();
    });
  });
});
