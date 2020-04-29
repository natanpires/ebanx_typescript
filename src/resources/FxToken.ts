/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const fxtoken = async (params: models.FxToken): Promise<object> => {
  const method = "POST";
  const uri = "ws/fxtoken/get";

  validator.params = params;
  validator.validatePresence("country");
  validator.validatePresence("currency_from");
  validator.validatePresence("currency_to");

  const config = {
    uri,
    method,
    requestType: "JSON",
  };

  return await client.send(config, params);
};
