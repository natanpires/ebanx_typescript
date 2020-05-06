/* Copyright 2020 Natan Pires de Souza */
"use strict";

import Config from "./Config";
import { cancel } from "./resources/Cancel";
import { capture } from "./resources/Capture";
import { direct } from "./resources/Direct";
import { documentBalance } from "./resources/DocumentBalance";
import { exchange } from "./resources/Exchange";
import { print } from "./resources/Print";
import { query } from "./resources/Query";
import { refund } from "./resources/Refund";
import { refundOrCancel } from "./resources/RefundOrCancel";
import { request } from "./resources/Request";
import { token } from "./resources/Token";
import { zipcode } from "./resources/Zipcode";
import { setcvv } from "./resources/SetCVV";
import { fxtoken } from "./resources/FxToken";
import { getbanklist } from "./resources/GetBankList";
import { cardbin } from "./resources/CardBin";
import * as models from "./interfaces";

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
  cancel = async (params: models.Cancel): Promise<any> => {
    return await cancel(params);
  };

  capture = async (params: models.Capture): Promise<any> => {
    return await capture(params);
  };

  direct = async (params: models.Direct): Promise<any> => {
    return await direct(params);
  };

  documentBalance = async (params: models.DocumentBalance): Promise<any> => {
    return await documentBalance(params);
  };

  exchange = async (params: models.Exchange): Promise<any> => {
    return await exchange(params);
  };

  print = async (params: models.Print): Promise<any> => {
    return await print(params);
  };

  query = async (params: models.Query): Promise<any> => {
    return await query(params);
  };

  refund = async (params: models.Refund): Promise<any> => {
    return await refund(params);
  };

  refundOrCancel = async (params: models.RefundOrCancel): Promise<any> => {
    return await refundOrCancel(params);
  };

  request = async (params: models.Request): Promise<any> => {
    return await request(params);
  };

  token = async (params: models.Token): Promise<any> => {
    return await token(params);
  };

  setcvv = async (params: models.SetCVV): Promise<any> => {
    return await setcvv(params);
  };

  fxtoken = async (params: models.FxToken): Promise<any> => {
    return await fxtoken(params);
  };

  getbanklist = async (params: models.GetBankList): Promise<any> => {
    return await getbanklist(params);
  };

  zipcode = async (params: models.Zipcode): Promise<any> => {
    return await zipcode(params);
  };

  cardbin = async (params: models.CardBin): Promise<any> => {
    return await cardbin(params);
  };
}
