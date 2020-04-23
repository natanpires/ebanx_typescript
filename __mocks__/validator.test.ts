import validator from "../src/resources/Validator";
import { expect } from "chai";
import "mocha";

describe('Validator module', () => {
  const token = {
    payment_type_code : "visa",
    creditcard : {
      card_number : "4111111111111111",
      card_name : "eita teste",
      card_due_date : "10/2020",
      card_cvv : "123",
      levelThree : {
        thisIsLevelThree : {
          yetAnotherLevel : "test"
        }
      }
    }
  }
  
  it('Should have hash (simple level)', (done: () => void) => {
    validator.params = {hash : "LoremIpsum"};
    expect(validator.validatePresence("hash")).to.be.ok;
    done();  
  });
  
  it('Should have creditcard.card_number (level two)', (done: () => void) => {
    validator.params = token;
    expect(validator.validatePresence("creditcard.card_number")).to.be.ok;
    done();
  });
  
  it('Should have creditcard.levelThree.thisIsLevelThree (level three)', (done: () => void) => {
    validator.params = token;
    expect(validator.validatePresence("creditcard.levelThree.thisIsLevelThree")).to.be.ok;
    done();
  });

  it('Should have creditcard.levelThree.thisIsLevelThree.yetAnotherLevel (level four)', (done: () => void) => {
    validator.params = token;
    expect(validator.validatePresence("creditcard.levelThree.thisIsLevelThree.yetAnotherLevel")).to.be.ok;
    done();
  });

  it('Should test integrationKey config error', (done: () => void) => {
    const config = {
      integrationKey : "",
      testMode : true
    }
    expect(() => {
      validator.validateConfig(config);
    }).to.throw('Config value integrationKey not informed');

    done();
  });

  it('Should test testMode config error', (done: () => void) => {
    const config = {
      integrationKey : "integration_key",
      testMode : "true"
    }    
    expect(() => {
      validator.validateConfig(config);
    }).to.throw('Config key testMode not boolean value');

    done();
  });

  it('Should test presence error', (done: () => void) => {
    const params = {};
    
    validator.params = params;
    expect(() => {
      validator.validatePresence("hash");
    }).to.throw('The parameter hash was not supplied.');

    done();
  });

  it('Should test presenceOr error: absence', (done: () => void) => {
    const params = {};
    
    validator.params = params;
    expect(() => {
      validator.validatePresenceOr("hash", "merchant_payment_code");
    }).to.throw('Either parameter hash or merchant_payment_code must be supplied.');

    done();
  });

  it('Should test presenceOr error: double presence', (done: () => void) => {
    const params = {hash : "foo", merchant_payment_code : "bar"};
    
    validator.params = params;
    expect(() => {
      validator.validatePresenceOr("hash", "merchant_payment_code");
    }).to.throw('Either parameter hash or merchant_payment_code must be supplied, but not both.');

    done();
  });
});