import React from 'react';
import {
  CoinSearchContainer,
  CoinSearchInput,
  CustomCloseIcon,
} from './CoinPriceListChart.style';

function CoinSearchSection() {
  return (
    <section>
      <CoinSearchContainer>
        <CoinSearchInput
          id="outlined-basic"
          label="코인명/심볼 검색"
          variant="outlined"
          size="small"
        />
        <CustomCloseIcon />
      </CoinSearchContainer>
    </section>
  );
}

export default CoinSearchSection;
