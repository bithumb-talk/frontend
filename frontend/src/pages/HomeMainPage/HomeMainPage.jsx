/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import CommonLayout from '@/components/@layout/CommonLayout';
import PostGrid from '@/components/PostGrid/PostGrid';
import api from '@/api/api';

function HomeMainPage() {
  const [item, setItem] = useState([]);
  const [allItem, setAll] = useState([]);

  const getRanking = async () => {
    const res = await api.getRanking();
    if (res.data.status === 'SUCCESS') {
      setItem(res.data.data.content);
    }
  };

  const getBoardAll = async () => {
    const res = await api.getBoardAll();
    if (res.data.status === 'SUCCESS') {
      setAll(res.data.data.content);
    }
  };

  useEffect(() => {
    getRanking();
    getBoardAll();
  }, []);

  return (
    <CommonLayout>
      <h2
        style={{
          margin: '0.5em',
          paddingLeft: ' 4em',
          display: 'flex',
          justifyContent: 'flex-start',
          fontFamily: 'Gowun Batang',
        }}
      >
        베스트 인기글 Top4👑
      </h2>
      <PostGrid postItem={item} />
      <h2
        style={{
          margin: '0.5em',
          paddingLeft: ' 4em',
          display: 'flex',
          justifyContent: 'flex-start',
          fontFamily: 'Gowun Batang',
        }}
      >
        전체 글
      </h2>
      <PostGrid postItem={allItem} />
    </CommonLayout>
  );
}

export default HomeMainPage;
