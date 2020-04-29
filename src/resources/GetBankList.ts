/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const getbanklist = async (params: models.GetBankList): Promise<object> => {
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

  return await client.send(config, params);
};
