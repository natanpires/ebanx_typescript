"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";

export const zipcode = (
  params: { [x: string]: any },
  callback: (arg0: any, arg1: any) => void
) => {
  const method = "GET";
  const uri = "ws/zipcode";

  validator.params = params;
  validator.validatePresence("zipcode");

  const config = {
    uri,
    method
  };

  client.send(config, params, (err: any, reply: any) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, reply);
    }
  });
};
