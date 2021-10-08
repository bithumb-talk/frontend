import React from 'react';
// import { useDispatch } from 'react-redux';
// import { setSordStatus } from '@/redux/coinPriceSlice';
import useCoin from '@/hooks/useCoin';
import {
  CoinPriceInfoTab,
  TableGrid,
  FilterButton,
} from './CoinPriceListChart.style';

function CoinPriceFilterTab() {
  // const dispatch = useDispatch();
  const { onSetSordStatus } = useCoin();

  const onClickTmp = (type) => {
    // dispatch(setSordStatus({ type }));
    onSetSordStatus({ type });
  };

  return (
    <>
      <CoinPriceInfoTab>
        <TableGrid width="30" />
        <TableGrid width="94">
          <FilterButton type="button" onClick={() => onClickTmp('korean')}>코인명</FilterButton>
        </TableGrid>
        <TableGrid width="88">
          <FilterButton type="button" onClick={() => onClickTmp('closePrice')}>현재가</FilterButton>
        </TableGrid>
        <TableGrid width="78">
          <FilterButton type="button" onClick={() => onClickTmp('chgRate')}>변동률</FilterButton>
        </TableGrid>
        <TableGrid>
          <FilterButton type="button" onClick={() => onClickTmp('accTradeValue')}>거래금액</FilterButton>
        </TableGrid>
      </CoinPriceInfoTab>
    </>
  );
}

export default CoinPriceFilterTab;
