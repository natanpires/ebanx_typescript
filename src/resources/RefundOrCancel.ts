/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const refundOrCancel = async (params: models.RefundOrCancel): Promise<object> => {
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

  return await client.send(config, params);
};
