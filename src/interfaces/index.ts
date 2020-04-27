export type CurrencyCodes = "BRL" | "EUR" | "MXN" | "PEN" | "USD" | "CLP" | "COP" | "ARS" | "BOB";

export type PaymentTypeCodes =
  | "amex"
  | "baloto"
  | "bancodobrasil"
  | "banrisul"
  | "banktransfer"
  | "boleto"
  | "bradesco"
  | "carnet"
  | "credimas"
  | "cupon"
  | "diners"
  | "discover"
  | "ebanxaccount"
  | "eft"
  | "elo"
  | "hipercard"
  | "itau"
  | "mastercard"
  | "multicaja"
  | "naranja"
  | "oxxo"
  | "pagoefectivo"
  | "pagofacil"
  | "pagosnet"
  | "rapipago"
  | "safetypay"
  | "safetypay-cash"
  | "safetypay-online"
  | "sencillito"
  | "servipag"
  | "spei"
  | "visa"
  | "webpay";

export type Countries = "bo" | "br" | "cl" | "co" | "mx" | "pe" | "ar" | "ec";

export interface Creditcard {
  card_number: string;
  card_name: string;
  card_due_date: string;
  card_cvv: string;
}

export interface Tokencard {
  token: string;
}

export interface Direct {
  payment: {
    name: string;
    email: string;
    birth_date?: string;
    document?: string;
    address: string;
    street_number: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
    phone_number: string;
    payment_type_code: PaymentTypeCodes;
    merchant_payment_code: string;
    currency_code: CurrencyCodes;
    instalments: number;
    amount_total: number;
    creditcard: Creditcard | Tokencard;
  };
}

export interface Token {
  country: Countries;
  payment_type_code: PaymentTypeCodes;
  creditcard: Creditcard;
}

export interface Refund {
  hash?: string;
  description: string;
  amount: string;
  merchant_refund_code?: string;
  refund_id?: number;
  operation: "request" | "cancel";
}

export interface RefundOrCancel {
  hash?: string;
  description: string;
  merchant_refund_code?: string;
}

export interface Exchange {
  currency_code: string;
  currency_base: string;
}

export interface DocumentBalance {
  document: string;
  currency_code: string;
}

export interface Zipcode {
  zipcode: string;
}

export interface Cancel {
  hash: string;
}

export interface Print {
  hash: string;
  format?: string;
}

export interface Query {
  hash?: string;
  merchant_payment_code?: string;
}

export interface Request {
  name: string;
  email: string;
  currency_code: CurrencyCodes;
  amount: number;
  merchant_payment_code: string;
  payment_type_code: PaymentTypeCodes;
  notification_url?: string;
  bypass_boleto_screen?: boolean;
  address?: string;
  street_number?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  country: Countries;
  phone_number?: string;
  due_date: string;
  sub_acc_name?: string;
  sub_acc_image_url?: string;
  instalments?: string;
  user_value_1?: string;
  user_value_2?: string;
  user_value_3?: string;
  user_value_4?: string;
  user_value_5?: string;
}

export interface Capture {
  hash?: string;
  merchant_payment_code?: string;
  merchant_capture_code?: string;
  amount?: number;
}

export interface SetCVV {
  token: string;
  card_cvv: string;
}

export interface GetBankList {
  operation: "request";
  country: Countries;
}

export interface FxToken {
  country: Countries;
  currency_from: CurrencyCodes;
  currency_to: CurrencyCodes;
}
