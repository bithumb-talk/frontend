import React from 'react';
import styled from 'styled-components';

const EmptyText = styled.p`
  text-align: center;
  margin-top: 12px;
  font-weight: bold;
`;

function EmptyList() {
  return (
    <>
      <EmptyText>결과가 존재하지 않습니다</EmptyText>
    </>
  );
}

export default EmptyList;
