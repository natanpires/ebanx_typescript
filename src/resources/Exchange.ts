/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const exchange = async (params: models.Exchange): Promise<object> => {
  const method = "GET";
  const uri = "ws/exchange";

  validator.params = params;
  validator.validatePresence("currency_code");

  const config = {
    uri,
    method,
    requestType: "QUERY",
  };

  return await client.send(config, params);
};
