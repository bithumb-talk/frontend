import styled from 'styled-components';

export const CoinTitleSection = styled.div`
  display: flex;
  align-items: flex-end;
  border-bottom: 0.5px solid #eee;
  padding-bottom: 10px;
`;

export const CoinTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

export const CoinSymbol = styled.p`
  font-size: 12px;
  margin-left: 4px;
`;

export const CoinInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const CoinPriceSection = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const CoinDiffPriceSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const CoinPrice = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

export const CoinUnit = styled.p`
  font-size: 10px;
`;

export const CoinUnitGap = styled.p`
  margin-left: 4px;
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexBoxDirectionColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexBoxBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const CoinDetailPriceContainer = styled.div`
  width: 200px;
  justify-content: space-around;
  margin-left: 16px;
`;

export const CoinDetailTitle = styled.p`
  font-size: 12px;
`;
