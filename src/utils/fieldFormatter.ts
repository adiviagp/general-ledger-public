import currency from "currency.js"


export const addSeparator = (num: number | string) => num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

export const addSeparatorRef = (num: number | string) => {
  const str = removeNonNumeric(num);
  const result = str?.match(/.{1,20}/g) ?? [];
  return result.toString();
};

export const removeNonNumeric = (num: number | string) => num?.toString().replace(/[^0-9]/g, '');
export const removeNonNumericCurrency = (num: number | string) => num?.toString().replace(/[^0-9\+\-\.]/g, "");

export const currencyFormatter = (value, precision) => {
  const formated = value => currency(value, { symbol: "Rp ", separator: ".", precision: precision || 0, decimal: ',' })
  return formated(value).format()
}
