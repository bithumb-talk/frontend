import React from 'react';
import PropTypes from 'prop-types';
import ROUTE from '@/router/routePath';
import { LoginLink, CoinLoginContainer, CoinTextContainer, CoinText } from './CoinPriceListChart.style';

function CoinLogin({ isModal }) {
  return (
    <CoinLoginContainer>
      <CoinTextContainer isModal={isModal}>
        <CoinText>로그인이 필요합니다</CoinText>
      </CoinTextContainer>

      <div>
        <LoginLink to={ROUTE.SIGNIN.PATH}>
          로그인
        </LoginLink>
      </div>
    </CoinLoginContainer>
  );
}

CoinLogin.propTypes = {
  isModal: PropTypes.bool.isRequired,
};

export default CoinLogin;
