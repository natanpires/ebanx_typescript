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

  setKey = (integrationKey: string): void => {
    this.settings.integrationKey = integrationKey;
  };

  setTestMode = (testMode: boolean): void => {
    this.settings.testMode = testMode;
  };

  setHttp = (usingHttp: boolean): void => {
    this.settings.usingHttp = usingHttp;
  };

  // Autoloading functions
  cancel = async (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => {
    return await cancel(params, callback);
  };

  capture = async (params: any, callback: any) => {
    return await capture(params, callback);
  };

  direct = async (params: { [x: string]: any; payment?: any }, callback: (arg0: any, arg1: any) => void) => {
    return await direct(params, callback);
  };

  documentBalance = async (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => {
    return await documentBalance(params, callback);
  };

  exchange = async (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => {
    return await exchange(params, callback);
  };

  print = async (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => {
    return await print(params, callback);
  };

  query = async (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => {
    return await query(params, callback);
  };

  refund = async (params: { [x: string]: any; operation?: any }, callback: (arg0: any, arg1: any) => void) => {
    return await refund(params, callback);
  };

  refundOrCancel = async (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => {
    return await refundOrCancel(params, callback);
  };

  request = async (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => {
    return await request(params, callback);
  };

  token = async (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => {
    return await token(params, callback);
  };

  zipcode = async (params: { [x: string]: any }, callback: (arg0: any, arg1: any) => void) => {
    return await zipcode(params, callback);
  };
}
