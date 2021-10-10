/* eslint-disable react/prop-types */
import React from 'react';
import { BoardPagination } from './Board.style';

export default function PostPagination(props) {
  const { page, count, onChange } = props;
  return (
    <div>
      <BoardPagination page={page} count={count} onChange={onChange} />
    </div>
  );
}
