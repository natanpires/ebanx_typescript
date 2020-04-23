"use strict";

export const construct = (
  obj: any,
  key: string | number | symbol,
  value: any
) => {
  const config = {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty(obj, key, config);
};
