import React from 'react';
import styled from 'styled-components';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box } from '@mui/material';
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
`;

const CoinDiffPriceSection = styled.div`
  display: flex;
  align-items: center;
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
            <p>3,500,000</p>
            <p>KRW</p>
          </CoinPriceSection>
          <CoinDiffPriceSection>
            <p>전일대비</p>
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <p>1.33%</p>
              <CustomArrowDropUpIcon />
            </Box>
            <p>90,000</p>
          </CoinDiffPriceSection>
        </div>
        <CoinPriceSection>
          <div>
            <CoinPriceSection>
              <p>고가</p>
              <p>3,631,000</p>
            </CoinPriceSection>
            <CoinPriceSection>
              <p>고가</p>
              <p>3,631,000</p>
            </CoinPriceSection>
          </div>
          <div>
            <CoinPriceSection>
              <p>고가</p>
              <p>3,631,000</p>
            </CoinPriceSection>
            <CoinPriceSection>
              <p>고가</p>
              <p>3,631,000</p>
            </CoinPriceSection>
          </div>
        </CoinPriceSection>
      </CoinInfoContainer>
    </section>
  );
}

export default CoinInfoDetailInfo;
