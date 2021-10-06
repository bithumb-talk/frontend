import React from 'react';
import ROUTE from '@/router/routePath';
import { LoginLink, CoinLoginContainer, CoinTextContainer, CoinText } from './CoinPriceListChart.style';

function CoinLogin() {
  return (
    <CoinLoginContainer>
      <CoinTextContainer>
        <CoinText>로그인이 필요합니다.</CoinText>
      </CoinTextContainer>

      <div>
        <LoginLink to={ROUTE.SIGNIN.PATH}>
          로그인
        </LoginLink>
      </div>
    </CoinLoginContainer>
  );
}

export default CoinLogin;
