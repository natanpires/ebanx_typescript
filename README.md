# EBANX Typescript module:

[![Build Status](https://travis-ci.org/natanpires/ebanx_typescript.svg?branch=master)](https://travis-ci.org/natanpires/ebanx_typescript)
[![codecov](https://codecov.io/gh/natanpires/ebanx_typescript/branch/master/graph/badge.svg)](https://codecov.io/gh/natanpires/ebanx_typescript)

EBANX is the market leader in e-commerce payment solutions for International Merchants selling online to Brazil. This module enables you to integrate EBANX with Typescript.

## Installation

### npm

npm i ebanx-ts --save

## Usage

```Typescript
// Require the module
import ebanxTs from "ebanx-ts";

// Construct with mandatory parameters integrationKey, testMode and httpMode.
const eb = new ebanxTs("1231000", true, true);

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
// import models as following to use the interfaces
import ebanxTs, { models } from "ebanx-ts";

const eb = new ebanxTs("integration_key", true, true);

const direct: models.Direct = {
  payment: {
		name: "Juan Garcia",
		email: "juangarciamexico@example.com",
		address: "Oyono",
		street_number: "882",
		city: "Hermosillo",
		state: "SO",
		zipcode: "48822",
		country: "mx",
		phone_number: "0405777687",
		payment_type_code: "visa",
		merchant_payment_code: "949284c1474",
    currency_code: "MXN",
    instalments: 1,
    amount_total: 100,
		creditcard: {
			card_number: "4111111111111111",
			card_name: "Juan Garcia",
			card_due_date: "12/2021",
			card_cvv: "123"
		}
	}
};

// Create direct payment - Inside of an async function.
const payment = async () => {
  const data = await eb.direct(direct);
  console.log(data);
};

payment();

// Without a function
eb.direct(direct)
                .then((res: any) => console.log(res))
                .catch((err: any) => console.log(err));

```

## Changelog

- **1.2.0**: Interfaces are now exported as models. (mandatory usage)
- **1.1.2**: Code refactored.
- **1.1.1**: Added FxToken, GetBankList, SetCVV operations and interfaces for every operation.
- **1.1.0**: Added querystring for GET methods.
- **1.0.3**: Asynchronous methods.
- **1.0.2**: Added Axios (Removed deprecated **request**).
- **1.0.0**: Released.
