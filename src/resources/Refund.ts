/* Copyright 2015 EBANX */
/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";

export const refund = (params: { [x: string]: any; operation?: any }, callback: (arg0: any, arg1: any) => void) => {
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
  };

  client.send(config, params, (err: any, reply: any) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, reply);
    }
  });
};
