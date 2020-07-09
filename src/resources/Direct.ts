/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const direct = async (params: models.Direct): Promise<object> => {
  const method = "POST";
  const uri = "ws/direct";

  validator.params = params.payment;
  validator.validatePresence("currency_code");
  validator.validatePresence("amount_total");
  validator.validatePresence("merchant_payment_code");
  validator.validatePresence("name");
  validator.validatePresence("email");
  validator.validatePresence("payment_type_code");

  /*istanbul ignore next*/
  params.mode ? params.mode : (params.mode = "full");

  const config = {
    uri,
    method,
    requestType: "JSON",
    direct: "request",
  };

  return await client.send(config, params);
};
