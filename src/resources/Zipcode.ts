/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";
import * as models from "../interfaces";

export const zipcode = async (params: models.Zipcode): Promise<object> => {
  const method = "GET";
  const uri = "ws/zipcode";

  validator.params = params;
  validator.validatePresence("zipcode");

  const config = {
    uri,
    method,
    requestType: "QUERY",
  };

  return await client.send(config, params);
};
