/* Copyright 2015 EBANX */
/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const fxtoken = async (params: models.FxToken, callback: (arg0: any, arg1: any) => void) => {
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

  await client.send(config, params, (_err: any, reply: any) => {
    return callback(null, reply);
  });
};
