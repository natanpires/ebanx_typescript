/* Copyright 2015 EBANX */
/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const refundOrCancel = async (params: models.RefundOrCancel, callback: (arg0: any, arg1: any) => void) => {
  const method = "POST";
  const uri = "ws/refundOrCancel";

  validator.params = params;
  validator.validatePresenceOr("hash", "merchant_refund_code");
  validator.validatePresence("description");

  const config = {
    uri,
    method,
    requestType: "JSON",
  };

  await client.send(config, params, (_err: any, reply: any) => {
    return callback(null, reply);
  });
};
