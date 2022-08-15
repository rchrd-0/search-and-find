import React from 'react';
import styled from 'styled-components';

import Main from './components/Main/Main';
import Header from './components/Header/Header';

import GlobalStyle from './assets/styles/GlobalStyle';
import Theme from './assets/styles/Theme';
import './assets/styles/fonts.css';
import './assets/styles/reset.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Theme>
        <Header />
        <Main />
      </Theme>
    </>
  );
}

export default App;
