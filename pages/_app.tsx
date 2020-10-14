import { createGlobalStyle } from 'styled-components';
import { AppProps } from 'next/app';
import { FC } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    max-width: 100%;
    box-sizing: border-box;
  }

img {
  height: auto;
}

  a, a:visited {
text-decoration: none;
color: inherit;
  }
`;

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
