export const setNewDataWithSymbol = ({ payloadData, copiedData }) => {
  const newData = copiedData.map((coin) => {
    const findData = payloadData.find(({ symbol: payloadSymbol }) => `${coin.symbol}_KRW` === payloadSymbol);

    if (findData) {
      const { lowPrice, highPrice, value, volume, chgRate, chgAmt, closePrice } = findData;
      return {
        ...coin,
        closePrice,
        chgRate,
        chgAmt,
        accTradeValue: value,
        unitsTraded: volume,
        minPrice: lowPrice,
        maxPrice: highPrice,
      };
    }
    return {
      ...coin,
    };
  });

  return newData;
};
