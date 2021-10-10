import styled from 'styled-components';
import { COLOR } from '@/constants/style';

export const RisingCoinViewContainer = styled.section``;

export const RisingCoinContainer = styled.div`
  padding: 13px;
  box-shadow: 2px 2px 4px #dee1e7;
  border: 1px solid #eee;
  background-color: #fff;
  border-radius: 10px;
  width: 180px;
  height: 120px;
`;

export const RisingCoinChangeAmount = styled.p`
  color: ${COLOR.RED};
  font-size: 30px;
  font-weight: bold;
`;

export const RisingCoinChangeRate = styled.p`
  color: ${COLOR.RED};
  font-size: 12px;
`;
