import styled from 'styled-components';

export const CoinPriceListContainer = styled.article`
  width: 400px;
  height: 95vh;
  padding: 10px;
  box-shadow: 2px 2px 4px #dee1e7;
  border: 1px solid #eee;
  background-color: #fff;
`;

export const CoinSearchContainer = styled.div`
  position: relative;
`;

export const CoinPriceInfoTab = styled.div`
  display: flex;
  font-size: 12px;
  margin: 10px 0;
`;

export const CoinListItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  border-top: 0.5px solid #cbcbcb;
  height: 50px;
`;

export const TableGrid = styled.div`
  display: flex;
  width: ${({ width }) => `${width}px`};
`;

export const FilterButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  font-size: 12px;
`;

export const CoinFont = styled.p`
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => `${size}px`};
`;

export const CoinPriceListSection = styled.section`
  overflow: auto;
  max-height: 60vh;
`;
