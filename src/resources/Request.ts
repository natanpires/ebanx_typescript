/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const request = async (params: models.Request): Promise<object> => {
  const method = "POST";
  const uri = "ws/request";

  validator.params = params;
  validator.validatePresence("currency_code");
  validator.validatePresence("amount");
  validator.validatePresence("merchant_payment_code");
  validator.validatePresence("name");
  validator.validatePresence("email");
  validator.validatePresence("payment_type_code");

  const config = {
    uri,
    method,
    requestType: "JSON",
  };

  return await client.send(config, params);
};
