/* eslint-disable react/prop-types */
import React, { useEffect, useState, useCallback } from 'react';
import './BoradWrite.style.css';
import { Grid } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { PostGrid, PostPagination } from '@/components/index';
import { categoryList } from '@/assets/index';
import api from '@/api/api';
import { WriteButton, PlusIcon } from './BoardList.style';

export default function BoardListPage() {
  const { pathname } = useLocation();
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [item, setItem] = useState([]);

  const getboardList = useCallback(async (url, search) => {
    if (url === 'all') {
      const res = search ? await api.getBoardAll(search) : await api.getBoardAll();
      if (res.data.status === 'SUCCESS') {
        if (res.data.data.content) setItem(res.data.data.content);
        setTotalPage(res.data.data.page.totalPages);
      }
    } else if (url === 'talk') {
      const pageUrl = search ? url.concat(search) : url;
      const res = await api.getBoardCategory(pageUrl);
      if (res.data.status === 'SUCCESS') {
        setTotalPage(res.data.data.page.totalPages);
        if (res.data.data.content) setItem(res.data.data.content);
      }
    }
  }, []);

  const onPageClick = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (page !== 0) {
      const menuLink = categoryList.find((menu) => menu.link === pathname).name;
      getboardList(menuLink, `?page=${page - 1}`);
    }
  }, [getboardList, page, pathname]);

  useEffect(() => {
    if (pathname.indexOf('/board/') !== -1) {
      const menuLink = categoryList.find((menu) => menu.link === pathname).name;
      getboardList(menuLink, null);
    }
  }, [getboardList, pathname]);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Grid item xs={10} md={10} lg={10}>
          <PostGrid postItem={item} />
          <PostPagination page={page} count={totalPage} onChange={onPageClick} />
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
              <PlusIcon sx={{ fontSize: '1em', marginRight: '0.2em' }} />새 글 작성
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
