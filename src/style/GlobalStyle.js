import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    scrollbar-width: auto;
    scrollbar-color: #D7D4D8 #FFFFFF;
  }
  *::-webkit-scrollbar {
    width: 12px;
  }
  *::-webkit-scrollbar-track {
    background: var( --color-gray-0);
    border-radius:0 4px 4px 0;
  }
  *::-webkit-scrollbar-thumb {
    background-color: var( --color-primary);
    border-radius: 10px;
    border: 3px solid var(--color-gray-0);
  }
  body{
    overflow-x: hidden;
  }
  ul,ol{
    list-style: none;
  }
  :root{
    --color-primary:#27AE60;
    --color-primary-50:#93D7AF;
    --color-secondary:#EB5757;
    --color-gray-100:#333333;
    --color-gray-50:#828282;
    --color-gray-25:#BDBDBD;
    --color-gray-20:#E0E0E0;
    --color-gray-0:#F5F5F5;
    --color-white:#FFFFFF;
    --color-negative:#E60000;
    --color-warning:#FFCD07;
    --color-sucess:#168821;
    --color-information:#155BCB;
   
  }
  @media (min-width:980px) {
    main{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 80px;
    }
  }
`;
