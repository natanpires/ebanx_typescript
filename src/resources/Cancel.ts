/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const cancel = async (params: models.Cancel): Promise<object> => {
  const method = "POST";
  const uri = "ws/cancel";

  validator.params = params;
  validator.validatePresence("hash");

  const config = {
    uri,
    method,
    requestType: "JSON",
  };

  return await client.send(config, params);
};
