import styled from 'styled-components';
import { BREAK_POINT } from '@/constants/style';

export const MainPostTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin-left: 20px;
  font-family: 'Gowun Batang';
`;

export const MainPostContainer = styled.div`
  padding-top: 25px;
  box-shadow: 2px 2px 4px #dee1e7;
  border: 1px solid #eee;
  background-color: #fff;
  border-radius: 10px;
  width: calc(100% - 20px);

  media only screen and (max-width: ${BREAK_POINT.XXL}px) {
    width: calc(98% - 20px);
  }
`;

export const AllPostsContainer = styled(MainPostContainer)`
  margin-top: 20px;
`;
