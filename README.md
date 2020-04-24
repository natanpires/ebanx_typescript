# EBANX Typescript module:

[![Build Status](https://travis-ci.org/natanpires/ebanx_typescript.svg?branch=master)](https://travis-ci.org/natanpires/ebanx_typescript)
[![codecov](https://codecov.io/gh/natanpires/ebanx_typescript/branch/master/graph/badge.svg)](https://codecov.io/gh/natanpires/ebanx_typescript)

EBANX is the market leader in e-commerce payment solutions for International Merchants selling online to Brazil. This module enables you to integrate EBANX with Typescript.

## Installation

### npm

npm i ts-ebanx --save

## Usage

```Typescript
// Require the module
import ebanx from "ts-ebanx";

// Construct with mandatory parameters integrationKey, testMode and httpMode.
const eb = new ebanx("1231000", true, true);

```

    You can change the following settings:
    *integrationKey: your integration key. It will be different in test and production modes.
    *testMode: enable or disable the test mode. The default value is _true_.

    To create a new API request, just call one of the following functions
    on the ebanx object and supply it with the request parameters:
    * eb.cancel()
    * eb.capture()
    * eb.direct()
    * eb.documentBalance()
    * eb.exchange()
    * eb.print()
    * eb.query()
    * eb.refund()
    * eb.refundOrCancel()
    * eb.request()
    * eb.token()
    * eb.zipcode()

    You can check your settings by accessing the settings module:
    * eb.settings
    * eb.settings.integrationKey
    * eb.settings.testMode

    And change the settings by the following methods:
    * eb.setKey()
    * eb.setTestMode()
    * eb.setHttp()

#Examples:

```Typescript
import ebanx from "ts-ebanx";

const eb = new ebanx("1231000", true, true);

// Creating new checkout payment

const params : object = {
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

- **1.0.0**: Released
- **0.1.2**: ES5 to ES6
- **0.1.0**: Beta release (Added **mocks** and minor fixes).
- **0.0.3**: Pre-release.
