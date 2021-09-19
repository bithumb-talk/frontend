import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { MenuBox, MenuTabs, MenuTab } from './Style';

export default function MenuBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    if (newValue !== 2) {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '60%' }}>
      <MenuBox sx={{ width: '100%' }}>
        <MenuTabs value={value} onChange={handleChange}>
          <MenuTab label="커뮤니티" />
          <MenuTab label="시세 조회" />
          <MenuTab />
          <MenuTab label="마이페이지" />
        </MenuTabs>
      </MenuBox>
    </Box>
  );
}
