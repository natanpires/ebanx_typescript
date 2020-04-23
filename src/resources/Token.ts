"use strict";

import { default as client } from "../http/Client";
import { default as validator } from "./Validator";

export const token = (
  params: { [x: string]: any },
  callback: (arg0: any, arg1: any) => void
) => {
  const method = "POST";
  const uri = "ws/token";

  validator.params = params;
  validator.validatePresence("payment_type_code");
  validator.validatePresence("creditcard.card_number");
  validator.validatePresence("creditcard.card_name");
  validator.validatePresence("creditcard.card_due_date");
  validator.validatePresence("creditcard.card_cvv");

  const config = {
    uri,
    method,
    direct: true
  };

  client.send(config, params, (err: any, reply: any) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, reply);
    }
  });
};
