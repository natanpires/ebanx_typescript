/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const capture = async (params: models.Capture): Promise<object> => {
  const method = "GET";
  const uri = "ws/capture";

  validator.params = params;
  validator.validatePresenceOr("hash", "merchant_payment_code");

  const config = {
    uri,
    method,
    requestType: "JSON",
  };

  return await client.send(config, params);
};
