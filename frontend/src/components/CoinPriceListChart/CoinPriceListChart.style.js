// import styled, { keyframes } from 'styled-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLOR, BREAK_POINT } from '@/constants/style';

export const CoinPriceListContainer = styled.article`
  width: 400px;
  height: 95vh;
  padding: 10px;
  box-shadow: 2px 2px 4px #dee1e7;
  border: 1px solid #eee;
  background-color: #fff;
  border-radius: 10px;

  @media only screen and (max-width: ${BREAK_POINT.XS}px) {
    width: 354px;
  }
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
  ${({ active, color }) => active && `outline: 1px solid ${color};`}
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
  height: calc(100% - 132px);
`;

export const CoinSearchContainer = styled.div`
  position: relative;
`;

export const CoinLink = styled(Link)`
  :hover {
    text-decoration: underline;
  }
`;

export const CoinFontSpan = styled.span`
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => `${size}px`};
`;

export const LoginLink = styled(Link)`
  padding: 6px 12px;
  border: 1px solid #fff;
  margin-top: 20px;
  font-size: 14px;
  border-radius: 5px;
  color: #fff !important;
  background: ${COLOR.MAIN};
`;

export const CoinLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CoinTextContainer = styled.div`
  margin: 70px 0 20px;
`;

export const CoinText = styled.p`
  font-weight: bold;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  background-color: #fff;
  outline: none;
  border-radius: 10px;
  border: 1px solid ${COLOR.MAIN};
`;
