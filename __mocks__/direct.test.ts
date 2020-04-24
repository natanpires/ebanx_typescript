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
    payment_type_code: "itau",
    merchant_payment_code: "123141dafefesf",
    currency_code: "BRL",
    amount_total: 423.0,
  },
};

describe("Direct Operation Boleto", () => {
  eb.direct(direct, (_err, reply) => {
    it("Should return object", (done: () => void) => {
      expect(reply).to.be.an("object");
      done();
    });

    it("Method should be POST", (done: () => void) => {
      expect(reply.method).to.be.equal("POST");
      done();
    });

    it("URI should point to ws/direct", (done: () => void) => {
      expect(reply.uri).to.be.equal("ws/direct");
      done();
    });

    it('Params should contain "direct"', (done: () => void) => {
      expect(reply.direct).to.be.ok;
      done();
    });

    it('Param "currency_code" should be passed', (done: () => void) => {
      expect(reply.payment.currency_code).to.be.equal(direct.payment.currency_code);
      done();
    });

    it('Param "merchant_payment_code" should be passed', (done: () => void) => {
      expect(reply.payment.merchant_payment_code).to.be.equal(direct.payment.merchant_payment_code);
      done();
    });

    it('Param "phone_number" should be passed', (done: () => void) => {
      expect(reply.payment.phone_number).to.be.equal(direct.payment.phone_number);
      done();
    });

    it('Param "country" should be passed', (done: () => void) => {
      expect(reply.payment.country).to.be.equal(direct.payment.country);
      done();
    });

    it('Param "zipcode" should be passed', (done: () => void) => {
      expect(reply.payment.zipcode).to.be.equal(direct.payment.zipcode);
      done();
    });

    it('Param "state" should be passed', (done: () => void) => {
      expect(reply.payment.state).to.be.equal(direct.payment.state);
      done();
    });

    it('Param "city" should be passed', (done: () => void) => {
      expect(reply.payment.city).to.be.equal(direct.payment.city);
      done();
    });

    it('Param "street_number" should be passed', (done: () => void) => {
      expect(reply.payment.street_number).to.be.equal(direct.payment.street_number);
      done();
    });

    it('Param "address" should be passed', (done: () => void) => {
      expect(reply.payment.address).to.be.equal(direct.payment.address);
      done();
    });

    it('Param "document" should be passed', (done: () => void) => {
      expect(reply.payment.document).to.be.equal(direct.payment.document);
      done();
    });

    it('Param "birth_date" should be passed', (done: () => void) => {
      expect(reply.payment.birth_date).to.be.equal(direct.payment.birth_date);
      done();
    });

    it('Param "email" should be passed', (done: () => void) => {
      expect(reply.payment.email).to.be.equal(direct.payment.email);
      done();
    });

    it('Param "name" should be passed', (done: () => void) => {
      expect(reply.payment.name).to.be.equal(direct.payment.name);
      done();
    });

    it('Param "payment_type_code" should be passed', (done: () => void) => {
      expect(reply.payment.payment_type_code).to.be.equal(direct.payment.payment_type_code);
      done();
    });

    it('Param "amount_total" should be passed', (done: () => void) => {
      expect(reply.payment.amount_total).to.be.equal(direct.payment.amount_total);
      done();
    });
  });
});
