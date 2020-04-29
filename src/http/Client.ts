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
      return data;
    }

    Validator.validateConfig(config);

    options.params = data;
    options.params.integration_key = config.integrationKey;

    if (options.direct) {
      options.params.operation = "request";
    }

    if (options.requestType === "JSON") {
      try {
        const { data } = await axios({
          url,
          headers: {
            "User-Agent": "EbanxTS Direct",
            "Content-Type": "application/json",
          },
          method,
          data: options.params,
        });
        return data;
      } catch (error) {
        throw error;
      }
    } else {
      try {
        const { data } = await axios({
          baseURL: `${url}?${qs.stringify(options.params)}`,
          headers: {
            "User-Agent": "EbanxTS Module",
          },
          method,
        });
        return data;
      } catch (error) {
        throw error;
      }
    }
  }
}

export default new Client();
