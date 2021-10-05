/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import CommonLayout from '@/components/@layout/CommonLayout';
import PostGrid from '@/components/PostGrid/PostGrid';
import api from '@/api/api';

function HomeMainPage() {
  const [item, setItem] = useState([]);

  const getboardList = async () => {
    const res = await api.getBoardAll();
    if (res.data.status === 'SUCCESS') {
      setItem(res.data.data.content);
    }
  };

  useEffect(() => {
    getboardList();
  }, []);

  return (
    <CommonLayout>
      <PostGrid postItem={item} />
    </CommonLayout>
  );
}

export default HomeMainPage;
