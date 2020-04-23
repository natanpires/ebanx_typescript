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
import request from "request";

class Client {
  constructor() {}
  send(
    options: {
      [x: string]: any;
      uri: any;
      method: any;
      params?: any;
      direct?: any;
    },
    params: { [x: string]: any },
    callback: { (err: any, reply: any): void; (arg0: any, arg1: {}): void }
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
        request(
          {
            url,
            headers: {
              "User-Agent": "WISER - EBANX NodeJS Module Direct"
            },
            method,
            form: req
          },
          (error: string, _response: any, body: any) => {
            if (error) {
              throw new Error(error);
            } else {
              callback(null, body);
            }
          }
        );
      } else {
        request(
          {
            url,
            headers: {
              "User-Agent": "WISER - EBANX NodeJS Module"
            },
            method,
            qs: options.params
          },
          (error: string, _response: any, body: any) => {
            if (error) {
              throw new Error(error);
            } else {
              callback(null, body);
            }
          }
        );
      }
    }
  }
}

export default new Client();
