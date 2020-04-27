/* Copyright 2015 EBANX */
/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const query = async (params: models.Query, callback: (arg0: any, arg1: any) => void) => {
  const method = "GET";
  const uri = "ws/query";

  validator.params = params;
  validator.validatePresenceOr("hash", "merchant_payment_code");

  const config = {
    uri,
    method,
    requestType: "JSON",
  };

  await client.send(config, params, (_err: any, reply: any) => {
    return callback(null, reply);
  });
};
