/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './BoradWrite.style.css';
import { Grid } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import PostGrid from '@/components/PostGrid/PostGrid';
import api from '@/api/api';
import { WriteButton, WriteIcon, PlusIcon } from './BoardList.style';

export default function BoardListPage() {
  const { pathname } = useLocation();
  const [titleName, setTitleName] = useState('');
  const [item, setItem] = useState([]);

  const menuData = [
    { id: 1, link: 'all', name: 'ALL' },
    { id: 2, link: 'talk', name: '자유게시판' },
    { id: 3, link: 'cointalk', name: '코인잡담' },
    { id: 4, link: 'coinBeginner', name: '코인초보' },
  ];

  const getboardList = async (url) => {
    if (url === 'all') {
      const res = await api.getBoardAll();
      if (res.data.status === 'SUCCESS') {
        setItem(res.data.data.content);
      }
    } else {
      const res = await api.getBoardCategory(url);
      if (res.data.status === 'SUCCESS') {
        setItem(res.data.data.content);
      }
    }
  };
  useEffect(() => {
    getboardList(pathname.split('/')[2]);
    setTitleName(menuData.filter((o) => o.link === pathname.split('/')[2])[0].name);
  }, [pathname]);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Grid item xs={10} md={10} lg={10}>
          <h1 style={{ margin: '10px', fontSize: '2em', display: 'flex', justifyContent: 'center' }}>{titleName}</h1>
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
