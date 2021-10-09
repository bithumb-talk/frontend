/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './BoradWrite.style.css';
import { Grid } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import PostGrid from '@/components/PostGrid/PostGrid';
import { menuData } from '@/assets/index';
import api from '@/api/api';
import { WriteButton, WriteIcon, PlusIcon } from './BoardList.style';

export default function BoardListPage() {
  const { pathname } = useLocation();
  const [titleName, setTitleName] = useState('');
  const [item, setItem] = useState([]);

  const getboardList = async (url) => {
    if (url === 'all') {
      const res = await api.getBoardAll();
      if (res.data.status === 'SUCCESS') {
        if (res.data.data.content) setItem(res.data.data.content);
      }
    } else {
      const res = await api.getBoardCategory(url);
      if (res.data.status === 'SUCCESS') {
        if (res.data.data.content) setItem(res.data.data.content);
      }
    }
  };
  useEffect(() => {
    if (
      pathname.split('/')[2] === 'all'
      || pathname.split('/')[2] === 'talk'
      || pathname.split('/')[2] === 'cointalk'
      || pathname.split('/')[2] === 'coinBeginner'
    ) {
      getboardList(pathname.split('/')[2]);
    }
    setTitleName(menuData.filter((o) => o.link === pathname.split('/')[2])[0].name);
  }, [pathname]);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Grid item xs={10} md={10} lg={10}>
          <h3
            style={{
              margin: '0.5em',
              fontSize: '1.3em',
              display: 'flex',
              justifyContent: 'center',
              fontFamily: 'Gowun Batang',
            }}
          >
            {titleName}
          </h3>
          <PostGrid postItem={item} />
        </Grid>
        <div
          style={{
            position: 'fixed',
            bottom: '3%',
            left: '87%',
            zIndex: '1000',
          }}
        >
          <Link to="/boardwrite">
            <WriteButton aria-label="wirte">
              <WriteIcon />
              Write
              <PlusIcon />
            </WriteButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

BoardListPage.propTypes = {
  // item: PropTypes.string.isRequired,
};
