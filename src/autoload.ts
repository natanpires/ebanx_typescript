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
  cancel = () => cancel;
  capture = () => capture;
  direct = () => direct;
  documentBalance = () => documentBalance;
  exchange = () => exchange;
  print = () => print;
  query = () => query;
  refund = () => refund;
  refundOrCancel = () => refundOrCancel;
  request = () => request;
  token = () => token;
  zipcode = () => zipcode;
}
