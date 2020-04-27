/* Copyright 2015 EBANX */
/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const getbanklist = async (params: models.GetBankList, callback: (arg0: any, arg1: any) => void) => {
  const method = "POST";
  const uri = "ws/getBankList";

  validator.params = params;
  validator.validatePresence("operation");
  validator.validatePresence("country");

  const config = {
    uri,
    method,
    requestType: "QUERY",
  };

  await client.send(config, params, (_err: any, reply: any) => {
    return callback(null, reply);
  });
};
