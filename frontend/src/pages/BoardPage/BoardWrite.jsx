import React, { useState } from 'react';
import './BoradWrite.style.css';
import 'react-quill/dist/quill.snow.css';
// eslint-disable-next-line object-curly-newline
import { TextEditor, TextTitle, ComboBox, BoarBottom } from '@/components/index';

export default function BoardWrite() {
  const [content] = useState('');
  return (
    <div className="board">
      <h3>글쓰기</h3>
      <ComboBox />
      <TextTitle className="css-0" />
      <TextEditor className="ql-editor" name="content" content={content} />
      <BoarBottom />
    </div>
  );
}
