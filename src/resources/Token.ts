/* Copyright 2015 EBANX */
/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const token = async (params: models.Token, callback: (arg0: any, arg1: any) => void) => {
  const method = "POST";
  const uri = "ws/token";

  validator.params = params;
  validator.validatePresence("payment_type_code");
  validator.validatePresence("creditcard.card_number");
  validator.validatePresence("creditcard.card_name");
  validator.validatePresence("creditcard.card_due_date");
  validator.validatePresence("creditcard.card_cvv");

  const config = {
    uri,
    method,
    direct: true,
    requestType: "JSON",
  };

  await client.send(config, params, (_err: any, reply: any) => {
    return callback(null, reply);
  });
};
