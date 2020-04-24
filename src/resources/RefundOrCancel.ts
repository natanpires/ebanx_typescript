/* Copyright 2015 EBANX */
/* Copyright 2020 Natan Pires de Souza */
"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";

export const refundOrCancel = (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => {
  const method = "POST";
  const uri = "ws/refundOrCancel";

  validator.params = params;
  validator.validatePresence("hash");
  validator.validatePresence("description");

  const config = {
    uri,
    method,
  };

  client.send(config, params, (err: any, reply: any) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, reply);
    }
  });
};
