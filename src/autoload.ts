/* Copyright 2015 EBANX */
/* Copyright 2020 Natan Pires de Souza */
"use strict";

import Config from "./Config";
import { cancel } from "./resources/Cancel";
import { capture } from "./resources/Capture";
import { direct } from "./resources/Direct";
import { cancel as documentBalance } from "./resources/DocumentBalance";
import { exchange } from "./resources/Exchange";
import { print } from "./resources/Print";
import { query } from "./resources/Query";
import { refund } from "./resources/Refund";
import { refundOrCancel } from "./resources/RefundOrCancel";
import { request } from "./resources/Request";
import { token } from "./resources/Token";
import { zipcode } from "./resources/Zipcode";

export default class Ebanx {
  settings: any = Config;

  constructor(integrationKey: string, testMode: boolean, usingHttp: boolean) {
    this.settings.integrationKey = integrationKey;
    this.settings.testMode = testMode;
    this.settings.usingHttp = usingHttp;
  }

  setKey = (integrationKey: string) => {
    this.settings.integrationKey = integrationKey;
  };

  setTestMode = (testMode: boolean) => {
    this.settings.testMode = testMode;
  };

  setHttp = (usingHttp: boolean) => {
    this.settings.usingHttp = usingHttp;
  };

  // Autoloading functions
  cancel = (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => cancel(params, callback);

  capture = (params: any, callback: any) => capture(params, callback);

  direct = (params: { [x: string]: any; payment?: any }, callback: (arg0: any, arg1: any) => void) =>
    direct(params, callback);

  documentBalance = (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) =>
    documentBalance(params, callback);

  exchange = (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => exchange(params, callback);

  print = (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => print(params, callback);

  query = (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => query(params, callback);

  refund = (params: { [x: string]: any; operation?: any }, callback: (arg0: any, arg1: any) => void) =>
    refund(params, callback);

  refundOrCancel = (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) =>
    refundOrCancel(params, callback);

  request = (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => request(params, callback);

  token = (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => token(params, callback);

  zipcode = (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => zipcode(params, callback);
}
