/* eslint-disable max-len */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { menuData } from '@/assets/index';
import { MenuBox, MenuTabs, MenuTab, MenuBoxList } from './MenuBar.style';

export default function MenuBar() {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  const expandClick = () => {
    setOpen(!open);
    setValue(0);
  };

  const menuChange = (event, newValue) => {
    if (newValue === 0) {
      setOpen(!open);
    } else {
      setOpen(false);
    }
    if (newValue !== 2) {
      setValue(newValue);
    }
  };

  return (
    <Box>
      <MenuBox sx={{ width: '540px' }}>
        <MenuBoxList sx={{ width: '150px' }}>
          <MenuTab label="" style={{ zIndex: '-1' }} />
          <span style={{ zIndex: '10' }}>
            {open ? <ExpandLess onClick={expandClick} /> : <ExpandMore onClick={expandClick} />}
          </span>
          <Collapse style={{ zIndex: '10', background: '#fff' }} in={open} timeout="auto" unmountOnExit>
            {menuData.map((item) => (
              <Link to={{ pathname: item.link, state: { name: item.title, url: item.link } }} key={item.id}>
                <MenuTab key={item.id} label={item.title} onClick={expandClick} />
              </Link>
            ))}
          </Collapse>
        </MenuBoxList>
        <MenuTabs value={value} onChange={menuChange}>
          <MenuTab label="커뮤니티" onClick={expandClick} />
          <MenuTab label="시세조회" />
          <MenuTab />
          <Link to="/mypage">
            <MenuTab label="마이페이지" />
          </Link>
        </MenuTabs>
      </MenuBox>
    </Box>
  );
}
