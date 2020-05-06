/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const cardbin = async (params: models.CardBin): Promise<object> => {
  const method = "GET";
  const uri = "ws/cardbin";

  validator.params = params;
  validator.validatePresence("country");

  const config = {
    uri,
    method,
    requestType: "QUERY",
  };

  return await client.send(config, params);
};
