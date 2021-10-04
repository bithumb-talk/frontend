// import React from 'react';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { priceToString } from '@/utils/utils';
import CoinDetailInfoSkeleton from './CoinDetailInfoSkeleton';

import {
  CoinTitleSection,
  CoinTitle,
  CoinSymbol,
  CoinInfoContainer,
  CoinPriceSection,
  CoinDiffPriceSection,
  CoinPrice,
  CoinUnit,
  CoinUnitGap,
  FlexBox,
  FlexBoxDirectionColumn,
  FlexBoxBetween,
  CoinDetailPriceContainer,
  CoinDetailTitle,
} from './CoinDetailInfo.style';

const CustomArrowDropUpIcon = styled(ArrowDropUpIcon)`
  font-size: 20px;
  color: red;
`;
const CustomArrowDropDownIcon = styled(ArrowDropDownIcon)`
  font-size: 20px;
  color: blue;
`;

function CoinDetailInfo({ symbol: paylodSymbol }) {
  const [coinInfo, setCoinInfo] = useState({});
  const {
    coinPriceList: { data, isLoading },
  } = useSelector((state) => state.coinPrice);

  useEffect(() => {
    const filterData = () => {
      const coinDetailInfo = data.find(({ symbol }) => symbol === paylodSymbol);
      setCoinInfo({ ...coinDetailInfo });
    };

    if (data) {
      filterData();
    }
  }, [paylodSymbol, data]);

  if (isLoading) {
    return <CoinDetailInfoSkeleton />;
  }

  if (!data) {
    return null;
  }

  return (
    <section>
      <CoinTitleSection>
        <CoinTitle>{coinInfo.korean}</CoinTitle>
        <CoinSymbol>{coinInfo.symbol}</CoinSymbol>
      </CoinTitleSection>
      <CoinInfoContainer>
        <div>
          <CoinPriceSection>
            <CoinPrice>{coinInfo.closePrice}</CoinPrice>
            <CoinUnitGap>KRW</CoinUnitGap>
          </CoinPriceSection>
          <CoinDiffPriceSection>
            <CoinUnit>전일대비</CoinUnit>
            <FlexBox>
              <CoinUnitGap>{coinInfo.chgRate}%</CoinUnitGap>
              {
                coinInfo.chgRate > 0 ? <CustomArrowDropUpIcon /> : <CustomArrowDropDownIcon />
              }
            </FlexBox>
            <CoinUnitGap>{coinInfo.chgAmt}</CoinUnitGap>
          </CoinDiffPriceSection>
        </div>
        <FlexBoxDirectionColumn>
          <CoinDetailPriceContainer>
            <FlexBoxBetween>
              <CoinDetailTitle>고가</CoinDetailTitle>
              <p>{coinInfo.maxPrice}</p>
            </FlexBoxBetween>
            <FlexBoxBetween>
              <CoinDetailTitle>저가</CoinDetailTitle>
              <p>{coinInfo.minPrice}</p>
            </FlexBoxBetween>
          </CoinDetailPriceContainer>
          <CoinDetailPriceContainer>
            <FlexBoxBetween>
              <CoinDetailTitle>거래량(24H)</CoinDetailTitle>
              <p>{coinInfo.unitsTraded}</p>
            </FlexBoxBetween>
            <FlexBoxBetween>
              <CoinDetailTitle>거래대금(24H)</CoinDetailTitle>
              <p>{coinInfo.accTradeValue}</p>
            </FlexBoxBetween>
          </CoinDetailPriceContainer>
        </FlexBoxDirectionColumn>
      </CoinInfoContainer>
    </section>
  );
}

CoinDetailInfo.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default CoinDetailInfo;
