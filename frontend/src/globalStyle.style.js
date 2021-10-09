import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&family=Gowun+Batang&family=Jua&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100;200;300;400;500;600;700&family=Noto+Sans+KR:wght@300&display=swap');

      * {
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Noto Sans KR', sans-serif !important;
      }

      html,
      body,
      #root {
        width: 100%;
        height: 100%;
        font-size: 16px;
      }
      h1,
      h2{
         margin: '0.5em',
          paddingLeft: ' 4em',
          display: 'flex',
          justifyContent: 'flex-start',
          fontFamily: 'Gowun Batang',
      }
      h3, 
      html,
      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      a,
      img,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      article,
      footer,
      header,
      nav,
      section {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }

      article,
      footer,
      header,
      nav,
      section {
        display: block;
      }

      body {
        line-height: 1;
      }

      ol,
      ul {
        list-style: none;
      }

      a,
      a:link,
      a:visited,
      a:hover,
      a:active {
        color: inherit;
        text-decoration: none;
      }

      .fade-in {
        transition: opacity 1s ease;
      }

      .fade-out {
        opacity: 0;
        transition: opacity 1s ease;
      }
    `}
  />
);

export default GlobalStyle;
