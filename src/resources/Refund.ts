/* Copyright 2015 EBANX */
/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const refund = async (params: models.Refund, callback: (arg0: any, arg1: any) => void) => {
  const method = "POST";
  const uri = "ws/refund";

  validator.params = params;
  validator.validatePresence("operation");

  if (params.operation === "request") {
    validator.validatePresence("hash");
    validator.validatePresence("amount");
    validator.validatePresence("description");
  } else {
    validator.validatePresenceOr("merchant_refund_code", "refund_id");
  }

  const config = {
    uri,
    method,
    requestType: "JSON",
  };

  await client.send(config, params, (_err: any, reply: any) => {
    return callback(null, reply);
  });
};
