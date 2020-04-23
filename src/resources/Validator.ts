"use strict";
class Validator {
  params: any;

  exists = (key: string) => {
    if (key.indexOf(".") > 0) {
      const keys = key.split(".");
      const levels = keys.length;
      const params = this.params;

      if (levels === 4) {
        if (params[keys[0]][keys[1]][keys[2]][keys[3]]) {
          return params[keys[0]][keys[1]][keys[2]][keys[3]];
        }
      } else if (levels === 3) {
        if (params[keys[0]][keys[1]][keys[2]]) {
          return params[keys[0]][keys[1]][keys[2]];
        }
      } else {
        if (params[keys[0]][keys[1]]) {
          return params[keys[0]][keys[1]];
        }
      }
    }

    if (this.params.hasOwnProperty(key)) {
      return true;
    }

    return false;
  };

  validatePresence = (key: string) => {
    if (this.exists(key)) {
      return true;
    }
    throw new Error(`The parameter ${key} was not supplied.`);
  };

  validatePresenceOr = (key1: string, key2: string) => {
    if (this.exists(key1)) {
      if (this.exists(key2)) {
        throw new Error(
          `Either parameter ${key1} or ${key2} must be supplied, but not both.`
        );
      }

      return true;
    } else if (this.exists(key2)) {
      return true;
    }

    throw new Error(`Either parameter ${key1} or ${key2} must be supplied.`);
  };

  validateConfig = (config: { integrationKey: any; testMode: any }) => {
    if (!config.integrationKey) {
      throw new Error("Config value integrationKey not informed");
    }
    if (typeof config.testMode !== "boolean") {
      throw new Error("Config key testMode not boolean value");
    }
  };
}

export default new Validator();
