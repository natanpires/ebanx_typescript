/* Copyright 2015 EBANX */
/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";

export const exchange = async (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => {
  const method = "GET";
  const uri = "ws/exchange";

  validator.params = params;
  validator.validatePresence("currency_code");

  const config = {
    uri,
    method,
  };

  await client.send(config, params, (err: any, reply: any) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, reply);
  });
};
