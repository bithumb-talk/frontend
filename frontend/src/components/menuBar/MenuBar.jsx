/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuListDrop from './MenuListDrop';
import { MenuBox, MenuTabs, MenuTab } from './MenuBar.style';

export default function MenuBar() {
  const [value, setValue] = useState('');

  const handleChange = (event, newValue) => {
    if (newValue !== 1) {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex' }}>
        <MenuListDrop />
      </Box>
      <Box>
        <MenuBox sx={{ width: '540px' }}>
          <MenuTabs value={value} onChange={handleChange}>
            <MenuTab label="시세 조회" />
            <MenuTab />
            <MenuTab label="마이페이지" />
          </MenuTabs>
        </MenuBox>
      </Box>
    </Box>
  );
}
