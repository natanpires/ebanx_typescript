/* Copyright 2015 EBANX */
/* Copyright 2020 Natan Pires de Souza */
"use strict";

class Config {
  public integrationKey: string;
  public testMode: boolean;
  public usingHttp: boolean;

  constructor() {
    this.integrationKey = "";
    this.testMode = true;
    this.usingHttp = true;
  }

  getTestMode = () => {
    return this.testMode;
  };

  getIntegrationKey = () => {
    return this.integrationKey;
  };

  getEndPoint = () => {
    if (this.getTestMode()) {
      return "https://sandbox.ebanxpay.com/";
    }
    return "https://api.ebanxpay.com/";
  };
}

export default new Config();
