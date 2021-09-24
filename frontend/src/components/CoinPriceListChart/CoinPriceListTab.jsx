import React, { useState } from 'react';
import {
  Tabs, Tab,
} from '@mui/material';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CoinPriceListTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <div>
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="원화" {...a11yProps(0)} />
          <Tab label="관심" {...a11yProps(1)} />
        </Tabs>
      </div>
    </section>
  );
}

export default CoinPriceListTab;
