import ebanx, { models } from "./lib/";

const eb = new ebanx("integration_key", true, true);

const cardbin: models.CardBin = {
  country: "BR",
};

eb.cardbin(cardbin)
  .then((res: any) => console.log(res))
  .catch((err: any) => console.log(err));
