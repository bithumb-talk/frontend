/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import CommonLayout from '@/components/@layout/CommonLayout';
import PostGrid from '@/components/PostGrid/PostGrid';
import api from '@/api/api';
import { MainPostTitle, MainPostContainer, AllPostsContainer } from './HomeMainPage.style';

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
      <section>
        <MainPostContainer>
          <MainPostTitle>
            베스트 인기글 Top4👑
          </MainPostTitle>
          <PostGrid postItem={item} />
        </MainPostContainer>

        <AllPostsContainer>
          <MainPostTitle>
            전체 글
          </MainPostTitle>
          <PostGrid postItem={allItem} />
        </AllPostsContainer>
      </section>
    </CommonLayout>
  );
}

export default HomeMainPage;
