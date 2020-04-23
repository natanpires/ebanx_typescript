EBANX NodeJs-TS Module:
==============
EBANX is the market leader in e-commerce payment solutions for International Merchants selling online to Brazil. This module enables you to integrate EBANX with NodeJs.

Usage
---------
```javascript
//Require the module
import ebanx from "ebanx";

// Contruct with mandatory parameters integrationKey, testMode and httpMode.
const eb = new ebanx("1231000", true, true);

```

    You can change the following settings:
    *integrationKey: your integration key. It will be different in test and production modes.
    *testMode: enable or disable the test mode. The default value is _true_.

    To create a new API request, just call one of the following functions 
    on the ebanx object and supply it with the request parameters:
    * ebanx.cancel()
    * ebanx.capture()
    * ebanx.direct()
    * ebanx.documentBalance()
    * ebanx.exchange()
    * ebanx.print()
    * ebanx.query()
    * ebanx.refund()
    * ebanx.refundOrCancel()
    * ebanx.request()
    * ebanx.token()
    * ebanx.zipcode()

    You can check your settings by accessing the settings module:
    * ebanx.settings
    * ebanx.settings.integrationKey
    * ebanx.settings.testMode

#Examples:

```Typescript
import ebanx from "ebanx";

const eb = new ebanx("1231000", true, true);

//Creating new checkout payment

const params = {
  currency_code       : 'USD',
  'amount'            : '22.00',
  'name'              : 'Jose da Silva',
  'email'             : 'jose@example.org',
  'payment_type_code' : '_all',
  'merchant_payment_code' : "example123"
};

eb.request(params, (error, reply) => {
  if(error) {
    console.log(error);
  } else {
    console.log(reply);
  }
});
    
```

## Changelog
* **0.0.3**: Pre-release.