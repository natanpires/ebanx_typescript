/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const documentBalance = async (params: models.DocumentBalance): Promise<object> => {
  const method = "GET";
  const uri = "ws/documentbalance";

  validator.params = params;
  validator.validatePresence("currency_code");
  validator.validatePresence("document");

  const config = {
    uri,
    method,
    requestType: "QUERY",
  };

  return await client.send(config, params);
};
