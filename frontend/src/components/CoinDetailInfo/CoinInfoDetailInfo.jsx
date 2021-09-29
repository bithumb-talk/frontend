import React from 'react';
import styled from 'styled-components';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CoinTitleSection = styled.div`
  display: flex;
  align-items: flex-end;
  border-bottom: .5px solid #eee;
  padding-bottom: 10px;
`;

const CoinTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const CoinSymbol = styled.p`
  font-size: 12px;
  margin-left: 4px;
`;

const CoinInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const CustomArrowDropUpIcon = styled(ArrowDropUpIcon)`
  font-size: 15px;
  color: blue;
`;

const CoinPriceSection = styled.div`
  display: flex;
  align-items: flex-end;
`;

const CoinDiffPriceSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const CoinPrice = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

const CoinUnit = styled.p`
  font-size: 10px;
`;

const CoinUnitGap = styled.p`
  margin-left: 4px;
`;

const FlexBox = styled.div`
  display: flex;
`;

const FlexBoxDirectionColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexBoxBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const CoinDetailPriceContainer = styled.div`
  width: 200px;
  justify-content: space-around;
  margin-left: 16px;
`;

const CoinDetailTitle = styled.p`
  font-size: 12px;
`;

function CoinInfoDetailInfo() {
  return (
    <section>
      <CoinTitleSection>
        <CoinTitle>이더리움</CoinTitle>
        <CoinSymbol>ETH</CoinSymbol>
      </CoinTitleSection>
      <CoinInfoContainer>
        <div>
          <CoinPriceSection>
            <CoinPrice>3,500,000</CoinPrice>
            <CoinUnitGap>KRW</CoinUnitGap>
          </CoinPriceSection>
          <CoinDiffPriceSection>
            <CoinUnit>전일대비</CoinUnit>
            <FlexBox>
              <CoinUnitGap>1.33%</CoinUnitGap>
              <CustomArrowDropUpIcon />
            </FlexBox>
            <CoinUnitGap>90,000</CoinUnitGap>
          </CoinDiffPriceSection>
        </div>
        <FlexBoxDirectionColumn>
          <CoinDetailPriceContainer>
            <FlexBoxBetween>
              <CoinDetailTitle>고가</CoinDetailTitle>
              <p>3,631,000</p>
            </FlexBoxBetween>
            <FlexBoxBetween>
              <CoinDetailTitle>저가</CoinDetailTitle>
              <p>3,631,000</p>
            </FlexBoxBetween>
          </CoinDetailPriceContainer>
          <CoinDetailPriceContainer>
            <FlexBoxBetween>
              <CoinDetailTitle>거래량(24H)</CoinDetailTitle>
              <p>3,631,000</p>
            </FlexBoxBetween>
            <FlexBoxBetween>
              <CoinDetailTitle>거래대금(24H)</CoinDetailTitle>
              <p>3,631,000</p>
            </FlexBoxBetween>
          </CoinDetailPriceContainer>
        </FlexBoxDirectionColumn>
      </CoinInfoContainer>
    </section>
  );
}

export default CoinInfoDetailInfo;
