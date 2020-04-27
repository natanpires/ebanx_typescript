/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const setcvv = async (params: models.SetCVV, callback: (arg0: any, arg1: any) => void) => {
  const method = "POST";
  const uri = "ws/token/setCVV";

  validator.params = params;
  validator.validatePresence("token");
  validator.validatePresence("card_cvv");

  const config = {
    uri,
    method,
    requestType: "JSON",
  };

  await client.send(config, params, (_err: any, reply: any) => {
    return callback(null, reply);
  });
};
