import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    /* Color */
    --black-default: #000000;
    --grey-light: #DCDCDC;
    --grey-blur-light: #F6F6F6;
    --white-default: #ffffff;

    --blue-normal: #0E4A84;
    --blue-light: #AACEEC;
    --blue-blur-light: #DAEBF9;

    --yellow-money: #FFCB41;
    --red-caution: #FF6651;
    --green-success: #51D486;

    --main-green: #00FD89;
    --main-pink: #FF75E9;

    --main-black: #17171B;
    --main-white: #E0E0E0;
    --grey-dark: #585858;
    --grey-normal: #898C8E;

    --level-one: #2A2A3A;
    --level-one-ol: #303043;
    --level-two: #3D3D4E;
    --level-two-ol: #444457;
    --level-three: #49495E;
    --level-three-ol: #4E4E63;

    /* Font size */
    --font-huge: 32px;
    --font-large: 24px;
    --font-medium: 20px;
    --font-regular: 16px;
    --font-small: 14px;
    --font-micro: 12px;
    --font-minor: 10px;

    /* Font weight */
    --weight-bold: 700;
    --weight-semi-bold: 600;
    --weight-regular: 500;
    --weight-thin: 400;

    /* Animation Duration */
    --animation-duration: 300ms;

    /* Responsive Width */
    --responsive-width: 764px;
  }

  /* Universal tags */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-color: #e3ecf2;
    margin : 0;
    padding : 0;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;

    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  }

  input {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    //체크박스 색깔
    accent-color: var(--main-black);
  }

  input::placeholder {
    color: var(--grey-normal);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    padding-left: 0;
  }
  /* 스크롤바 설정*/
  ul::-webkit-scrollbar{
    width: 20px;
    height: 0px;
    margin-right: 4px;
  }

  /* 스크롤바 막대 설정*/
  ul::-webkit-scrollbar-thumb{
    background-color: var(--level-three);
    /* 스크롤바 둥글게 설정    */
    border-radius: 12px; 
    border: 7px solid var(--level-one);
  }

  /* 스크롤바 뒷 배경 설정*/
  ul::-webkit-scrollbar-track{
    background-color: var(--level-one);
    border-radius: 12px; 
  }

  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
  }

  hr {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;

    width: 100%;
    height: 4px;
    background-color: var(--color-dark-white);
  }
`;

export default GlobalStyle;
