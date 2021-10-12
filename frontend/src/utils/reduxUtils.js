const setDiff = (diffPrice) => {
  if (diffPrice > 0) {
    return 'down';
  }

  if (diffPrice < 0) {
    return 'up';
  }
  return 'same';
};

export const setNewDataWithSymbol = ({ payloadData, copiedData }) => {
  const newData = copiedData.map((coin) => {
    const findData = payloadData.find(({ symbol: payloadSymbol }) => `${coin.symbol}_KRW` === payloadSymbol);

    if (findData) {
      const { lowPrice, highPrice, value, volume, chgRate, chgAmt, closePrice } = findData;
      const diffPrice = coin.closePrice - closePrice;
      const diff = setDiff(diffPrice);

      return {
        ...coin,
        closePrice,
        chgRate,
        chgAmt,
        accTradeValue: value,
        unitsTraded: volume,
        minPrice: lowPrice,
        maxPrice: highPrice,
        diff,
      };
    }
    return {
      ...coin,
      diff: 'same',
    };
  });

  return newData;
};
