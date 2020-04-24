/* Copyright 2015 EBANX */
/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";

export const capture = async (params: any, callback: any) => {
  const method = "GET";
  const uri = "ws/capture";

  validator.params = params;
  validator.validatePresenceOr("hash", "merchant_payment_code");

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
