import ebanx, { models } from "ebanx-ts";

const eb = new ebanx("your_integration_key", true, true);

const zipcode: models.Zipcode = {
  zipcode: "80000100",
};

eb.zipcode(zipcode)
  .then((res: any) => console.log(res))
  .catch((err: any) => console.log(err));
