export const priceToString = (price) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const stringToNumber = (price) => Math.floor(Number(price));

export const numberToUnit = (price) => String(price).slice();

export const copy = (data) => JSON.parse(JSON.stringify(data));

export const stringToUnitPrice = (price) => priceToString(String(price).slice(0, -6));
