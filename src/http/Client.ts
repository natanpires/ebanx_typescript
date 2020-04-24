/* Copyright 2015 EBANX */
/* Copyright 2020 Natan Pires de Souza */
"use strict";
/*
  tslint:disable: object-shorthand-properties-first
  tslint:disable: no-var-keyword
  tslint:disable: prefer-const
  tslint:disable: variable-name 
*/
import { default as config } from "../Config";
import Validator from "../resources/Validator";
import { construct } from "../resources/Constructor";
import axios from "axios";

class Client {
  async send(
    options: {
      [x: string]: any;
      uri: string;
      method: any;
      params?: object | any;
      direct?: any;
    },
    params: { [x: string]: any },
    callback: { (err: any, reply: object): void; (arg0: any, arg1: {}): void },
  ) {
    const url = config.getEndPoint() + options.uri;
    const method = options.method;

    var data = {};
    for (var i in params) {
      construct(data, i, params[i]);
    }

    if (!config.usingHttp) {
      for (var i in options) {
        construct(data, i, options[i]);
      }
      callback(null, data);
    } else {
      Validator.validateConfig(config);

      options.params = data;
      options.params.integration_key = config.integrationKey;

      // If is Direct operation, change some parameters
      if (options.direct) {
        options.params.operation = "request";
        const req = { request_body: JSON.stringify(options.params) };
        await axios({
          url,
          headers: {
            "User-Agent": "Ebanx Direct",
          },
          method,
          data: req,
        })
          .then(response => {
            return callback(null, response.data);
          })
          .catch(error => {
            return callback(error.data, {});
          });
      }
      await axios({
        url,
        headers: {
          "User-Agent": "Ebanx Module",
        },
        method,
        params: options.params,
      })
        .then(response => {
          return callback(null, response.data);
        })
        .catch(error => {
          return callback(error.data, {});
        });
    }
  }
}

export default new Client();
