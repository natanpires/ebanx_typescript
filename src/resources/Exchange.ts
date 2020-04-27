/* Copyright 2015 EBANX */
/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const exchange = async (params: models.Exchange, callback: (arg0: any, arg1: any) => void) => {
  const method = "GET";
  const uri = "ws/exchange";

  validator.params = params;
  validator.validatePresence("currency_code");

  const config = {
    uri,
    method,
    requestType: "QUERY",
  };

  await client.send(config, params, (_err: any, reply: any) => {
    return callback(null, reply);
  });
};
