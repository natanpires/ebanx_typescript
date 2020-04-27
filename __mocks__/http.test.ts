import { expect, should } from "chai";
import "mocha";
import ebanx, { Direct, Query } from "../src";

const hash: Query = { hash: "552c21d21c55dd815c92ca69d937603913f1e69153916b0f" };

describe("HTTP Client test", () => {
  const eb = new ebanx("integration_key", true, false);
  it("Should return response", (done: () => void) => {
    eb.setHttp(true);
    eb.query(hash, (__err, reply) => {
      should().exist(reply);
      done();
    });
    done();
  });

  it("Should return ERROR from API", (done: () => void) => {
    eb.query(hash, (_err, reply) => {
      expect(reply.status).to.be.equal("ERROR");
      done();
    });
    done();
  });

  it("Should test direct method", (done: () => void) => {
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

    eb.direct(direct, (_err, reply) => {
      should().not.exist(_err);
      should().exist(reply);
      done();
    });
    done();
  });
});
