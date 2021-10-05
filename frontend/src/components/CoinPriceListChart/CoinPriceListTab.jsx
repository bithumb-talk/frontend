import React from 'react';
import {
  Tabs, Tab,
} from '@mui/material';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { setTabIndex } from '@/redux/coinPriceSlice';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CoinPriceListTab() {
  const { tabIndex } = useSelector((state) => state.coinPrice);
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch(setTabIndex({ value }));
  };

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
          {/* <Tab label="급상승 코인" {...a11yProps(2)} /> */}
        </Tabs>
      </div>
    </section>
  );
}

export default CoinPriceListTab;
