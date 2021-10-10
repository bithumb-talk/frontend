import React from 'react';
import {
  RisingCoinViewContainer,
  RisingCoinContainer,
  RisingCoinChangeAmount,
  RisingCoinChangeRate,
} from './RisingCoinView.style';

function RisingCoinView() {
  return (
    <article>
      <RisingCoinViewContainer>
        <RisingCoinContainer>
          <p>비트코인</p>
          <RisingCoinChangeAmount>95.80</RisingCoinChangeAmount>
          <div>
            <RisingCoinChangeRate>40</RisingCoinChangeRate>
          </div>
        </RisingCoinContainer>
      </RisingCoinViewContainer>
    </article>
  );
}

export default RisingCoinView;
