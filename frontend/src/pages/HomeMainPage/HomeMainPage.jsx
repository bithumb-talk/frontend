/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
// import { ToastContainer } from 'react-toastify';
import CommonLayout from '@/components/@layout/CommonLayout';
import PostGrid from '@/components/PostGrid/PostGrid';
import api from '@/api/api';
import { MainPostTitle, MainPostContainer, MainPostTitleBox, AllPostsContainer, MainPostSection } from './HomeMainPage.style';

function HomeMainPage() {
  const [item, setItem] = useState([]);
  const [allItem, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const getRanking = async () => {
    const res = await api.getRanking();
    if (res.data.status === 'SUCCESS') {
      setItem(res.data.data.content);
    }
  };

  const getBoardTotal = async () => {
    const res = await api.getBoardAll();
    if (res.data.status === 'SUCCESS') {
      setTotal(res.data.data.page.totalElements);
    }
  };

  const getBoardAll = async () => {
    const resPage = await api.getBoardAll(`?size=${total}`);
    if (resPage.data.status === 'SUCCESS') {
      setAll(resPage.data.data.content);
    }
  };

  useEffect(() => {
    if (total !== 0) {
      getBoardAll();
    }
  }, [total]);

  useEffect(() => {
    getRanking();
    getBoardTotal();
  }, []);

  return (
    <CommonLayout>
      <MainPostSection>
        <MainPostContainer>
          <MainPostTitleBox>
            <MainPostTitle>베스트 인기글 TOP4 👑</MainPostTitle>
          </MainPostTitleBox>
          <PostGrid postItem={item} />
        </MainPostContainer>

        <AllPostsContainer>
          <MainPostTitleBox>
            <MainPostTitle>전체 글 ✨</MainPostTitle>
          </MainPostTitleBox>
          <PostGrid postItem={allItem} />
        </AllPostsContainer>
      </MainPostSection>
    </CommonLayout>
  );
}

export default HomeMainPage;
