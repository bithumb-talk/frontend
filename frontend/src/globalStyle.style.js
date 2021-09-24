import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

      * {
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Noto Sans', sans-serif;
      }

      html,
      body,
      #root {
        width: 100%;
        height: 100%;
        font-size: 16px;
      }

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
    `}
  />
);

export default GlobalStyle;