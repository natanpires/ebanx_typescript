/* Copyright 2015 EBANX */
/* Copyright 2020 Natan Pires de Souza */
"use strict";

export const construct = (obj: object | any, key: string | number | symbol, value: any) => {
  const config = {
    value,
    writable: true,
    enumerable: true,
    configurable: true,
  };
  Object.defineProperty(obj, key, config);
};
