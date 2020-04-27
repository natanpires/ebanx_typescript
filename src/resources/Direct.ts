/* Copyright 2015 EBANX */
/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const direct = async (params: models.Direct, callback: (arg0: any, arg1: any) => void) => {
  const method = "POST";
  const uri = "ws/direct";

  validator.params = params.payment;
  validator.validatePresence("currency_code");
  validator.validatePresence("amount_total");
  validator.validatePresence("merchant_payment_code");
  validator.validatePresence("name");
  validator.validatePresence("email");
  validator.validatePresence("payment_type_code");

  const config = {
    uri,
    method,
    requestType: "JSON",
    direct: true,
  };

  await client.send(config, params, (_err: any, reply: any) => {
    return callback(null, reply);
  });
};
