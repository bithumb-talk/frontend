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

export const withoutImgTag = (value) => value.replace(/<img[^>]*src=[\\']?([^>\\']+)[\\']?[^>]*>/gi, '');

export const exportImgTag = (value) => value.match(/<img[^>]*src=[\\']?([^>\\']+)[\\']?[^>]*>/gi, '');

export const exportSrcTag = (value) => value.match(/\bhttps?:\/\/\S+/gi);

export const gapTime = (value) => {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return '방금전';
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeOneMonth = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeOneMonth < 30) {
    return `${betweenTimeOneMonth}일전`;
  }

  return `${timeValue.getFullYear()}년 ${timeValue.getMonth() + 1}월 ${timeValue.getDay()}일`;
};
