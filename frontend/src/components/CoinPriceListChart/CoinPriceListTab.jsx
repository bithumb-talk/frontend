import React, { useCallback, useEffect } from 'react';
import {
  Tabs, Tab,
} from '@mui/material';
import {
  useSelector,
} from 'react-redux';
import useCoin from '@/hooks/useCoin';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CoinPriceListTab() {
  const { onSetTabIndex } = useCoin();
  const { tabIndex, coinPriceList: { data } } = useSelector((state) => state.coinPrice);

  const handleChange = useCallback((event, value) => {
    onSetTabIndex({ value });
  }, [onSetTabIndex]);

  useEffect(() => {
    if (data) {
      onSetTabIndex({ value: 0 });
    }
  }, [onSetTabIndex, data]);

  return (
    <section>
      <div>
        <Tabs
          variant="fullWidth"
          value={tabIndex}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="원화" {...a11yProps(0)} />
          <Tab label="관심" {...a11yProps(1)} />
        </Tabs>
      </div>
    </section>
  );
}

export default CoinPriceListTab;
