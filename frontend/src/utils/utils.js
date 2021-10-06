export const priceToString = (price) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const stringToNumber = (price) => Math.floor(Number(price));

export const numberToUnit = (price) => String(price).slice();

export const copy = (data) => JSON.parse(JSON.stringify(data));

export const stringToUnitPrice = (price) => priceToString(String(price).slice(0, -6));

export const includeKor = (pivot, word) => pivot.includes(word);

export const includeEng = (pivot, word) => pivot.toLowerCase().includes(word.toLowerCase());

export const fixNumberDigit = (number, digit) => Number(number).toFixed(digit);

export const getItem = (key) => window.localStorage.getItem(key);

export const setItem = (key, value) => window.localStorage.setItem(key, value);
