import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { getCoinPriceList } from '@/redux/coinPriceSlice';
import auth from '@/utils/auth';
// import { onGetCoinPriceList } from '@/hooks/useCoin';
import useCoin from '@/hooks/useCoin';
import CoinSearchSection from './CoinSearchSection';
import CoinPriceListTab from './CoinPriceListTab';
import CoinPriceList from './CoinPriceList';
import {
  CoinPriceListContainer,
} from './CoinPriceListChart.style';
import CoinPriceFilterTab from './CoinPriceFilterTab';
import CoinLogin from './CoinLogin';

function CoinPriceListChart() {
  // const dispatch = useDispatch();
  const { onGetCoinPriceList } = useCoin();
  const { tabIndex } = useSelector((state) => state.coinPrice);

  useEffect(() => {
    // dispatch(getCoinPriceList());
    onGetCoinPriceList();
  }, [onGetCoinPriceList]);

  return (
    <>
      <CoinPriceListContainer>
        <section>
          <CoinSearchSection />
          <CoinPriceListTab />
          <CoinPriceFilterTab />
        </section>
        {
          tabIndex === 1 && !auth.isLogin()
            ? <CoinLogin />
            : <CoinPriceList />
        }
      </CoinPriceListContainer>
    </>
  );
}

export default memo(CoinPriceListChart);
