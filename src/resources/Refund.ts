/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const refund = async (params: models.Refund): Promise<object> => {
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
    direct: "request",
  };

  return await client.send(config, params);
};
