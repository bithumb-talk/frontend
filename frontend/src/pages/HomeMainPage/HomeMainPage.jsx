/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useCallback } from 'react';
import { PostGrid, PostPagination } from '@/components/index';
import CommonLayout from '@/components/@layout/CommonLayout';
import api from '@/api/api';
import {
  MainPostTitle,
  MainPostContainer,
  MainPostTitleBox,
  AllPostsContainer,
  MainPostSection,
} from './HomeMainPage.style';

function HomeMainPage() {
  const [item, setItem] = useState([]);
  const [allItem, setAll] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);

  const getRanking = async () => {
    const res = await api.getRanking();
    if (res.data.status === 'SUCCESS') {
      setItem(res.data.data.content);
    }
  };

  const getBoardAll = useCallback(async (search) => {
    const res = search ? await api.getBoardAll(search) : await api.getBoardAll();
    if (res.data.status === 'SUCCESS') {
      setTotalPage(res.data.data.page.totalPages);
      if (res.data.data.content) setAll(res.data.data.content);
    }
  });

  const onPageClick = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (page !== 0) getBoardAll(`?page=${page - 1}`);
  }, [getBoardAll, page]);

  useEffect(() => {
    getRanking();
    getBoardAll();
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
          <PostPagination page={page} count={totalPage} onChange={onPageClick} />
        </AllPostsContainer>
      </MainPostSection>
    </CommonLayout>
  );
}

export default HomeMainPage;
