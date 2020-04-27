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
import qs from "qs";
import axios from "axios";

class Client {
  async send(
    options: {
      [x: string]: any;
      uri: string;
      method: any;
      params?: object | any;
      requestType?: string;
      direct?: boolean;
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

      if (options.direct) {
        options.params.operation = "request";
      }

      if (options.requestType === "JSON") {
        await axios({
          url,
          headers: {
            "User-Agent": "EbanxTS Direct",
            "Content-Type": "application/json",
          },
          method,
          data: options.params,
        })
          .then(response => {
            return callback(null, response.data);
          })
          .catch(error => {
            throw error.data;
          });
      }
      if (options.requestType === "QUERY") {
        await axios({
          baseURL: `${url}?${qs.stringify(options.params)}`,
          headers: {
            "User-Agent": "EbanxTS Module",
          },
          method,
        })
          .then(response => {
            return callback(null, response.data);
          })
          .catch(error => {
            throw error;
          });
      }
    }
  }
}

export default new Client();
