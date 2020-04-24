import { expect } from "chai";
import "mocha";
import ebanx from "../src";

const eb = new ebanx("integration_key", true, false);

const direct = {
  payment: {
    name: "Fabricas Branco Ltda.",
    email: "fabricasbranco@example.com",
    birth_date: "12/04/1979",
    document: "01/03/1985",
    address: "Rua E",
    street_number: "1040",
    city: "Maracanaú",
    state: "CE",
    zipcode: "61919-230",
    country: "br",
    person_type: "business",
    responsible: {
      name: "José Silva",
      birth_date: "12/04/1979",
      document: "853.513.468-93",
    },
    phone_number: "8522847035",
    payment_type_code: "boleto",
    merchant_payment_code: "0efa347229e",
    currency_code: "BRL",
    amount_total: "100.00",
  },
};

describe("Direct Operation Person Type", () => {
  eb.direct(direct, (_err, reply) => {
    it('Should test person_type="business"', (done: () => void) => {
      expect(reply.payment.person_type).to.be.equal("business");
      done();
    });

    it('Should test responsible object for person_type="business"', (done: () => void) => {
      expect(reply.payment).to.have.property("responsible");
      done();
    });
  });
});
