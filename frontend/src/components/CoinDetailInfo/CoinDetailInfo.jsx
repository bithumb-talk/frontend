// import React from 'react';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { priceToString, fixNumberDigit } from '@/utils/utils';
import { COLOR } from '@/constants/style';
import { COIN_UNIT } from '@/constants/coin';
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
  CoinDetailPrice,
  CoinDetailUnit,
  CoinPriceContainer,
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
  const [coinInfo, setCoinInfo] = useState(null);
  const [coinColor, setCoinColor] = useState(COLOR.TYPO);
  const {
    coinPriceList: { data, isLoading },
  } = useSelector((state) => state.coinPrice);

  useEffect(() => {
    const filterData = () => {
      const coinDetailInfo = data.find(({ symbol }) => symbol === paylodSymbol);
      setCoinInfo({ ...coinDetailInfo });
      setCoinColor(coinDetailInfo.chgRate > 0 ? COLOR.RED : COLOR.BLUE);
    };

    if (data) {
      filterData();
    }
  }, [paylodSymbol, data]);

  if (isLoading) {
    return <CoinDetailInfoSkeleton />;
  }

  if (!data || !coinInfo) {
    return null;
  }

  return (
    <section>
      <CoinTitleSection>
        <CoinTitle>{coinInfo.korean}</CoinTitle>
        <CoinSymbol>{coinInfo.symbol}</CoinSymbol>
      </CoinTitleSection>
      <CoinInfoContainer>
        <CoinPriceContainer>
          <CoinPriceSection>
            <CoinPrice color={coinColor}>
              {priceToString(coinInfo.closePrice)}
            </CoinPrice>
            <CoinUnitGap color={coinColor}>{COIN_UNIT.KRW}</CoinUnitGap>
          </CoinPriceSection>
          <CoinDiffPriceSection>
            <CoinUnit>{COIN_UNIT.PREVIOUS_GAP}</CoinUnit>
            <FlexBox>
              <CoinUnitGap color={coinColor}>{coinInfo.chgRate}%</CoinUnitGap>
              {
                coinInfo.chgRate > 0 ? <CustomArrowDropUpIcon /> : <CustomArrowDropDownIcon />
              }
            </FlexBox>
            <CoinUnitGap color={coinColor}>{priceToString(coinInfo.chgAmt)}</CoinUnitGap>
          </CoinDiffPriceSection>
        </CoinPriceContainer>
        <FlexBoxDirectionColumn>
          <CoinDetailPriceContainer>
            <FlexBoxBetween>
              <CoinDetailTitle>{COIN_UNIT.HIGH_PRICE}</CoinDetailTitle>
              <CoinDetailPrice color={COLOR.RED}>
                {priceToString(coinInfo.maxPrice)}
                <CoinDetailUnit>KRW</CoinDetailUnit>
              </CoinDetailPrice>
            </FlexBoxBetween>
            <FlexBoxBetween>
              <CoinDetailTitle>{COIN_UNIT.LOW_PRICE}</CoinDetailTitle>
              <CoinDetailPrice color={COLOR.BLUE}>
                {priceToString(coinInfo.minPrice)}
                <CoinDetailUnit>{COIN_UNIT.KRW}</CoinDetailUnit>
              </CoinDetailPrice>
            </FlexBoxBetween>
          </CoinDetailPriceContainer>
          <CoinDetailPriceContainer>
            <FlexBoxBetween>
              <CoinDetailTitle>{COIN_UNIT.TRADING_VOLUME}(24H)</CoinDetailTitle>
              <CoinDetailPrice>
                {priceToString(fixNumberDigit(coinInfo.unitsTraded, 3))}
                <CoinDetailUnit>{coinInfo.symbol}</CoinDetailUnit>
              </CoinDetailPrice>
            </FlexBoxBetween>
            <FlexBoxBetween>
              <CoinDetailTitle>{COIN_UNIT.TRADING_PRICE}(24H)</CoinDetailTitle>
              <CoinDetailPrice>
                {priceToString(Math.floor(coinInfo.accTradeValue))}
                <CoinDetailUnit>{COIN_UNIT.KRW}</CoinDetailUnit>
              </CoinDetailPrice>
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
