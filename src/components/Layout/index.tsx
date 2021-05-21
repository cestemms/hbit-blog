import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

import { GlobalStyles } from '../../styles/global';

import * as S from './styles';

const Layout: React.FC = ( ) => {
  return (
    <>
      <S.Container>
        <Header id="app-header"/>
        <S.Wrapper>
          <Main id="main-content"/>
          <Sidebar id="sidebar" />
        </S.Wrapper>
        <Footer id="app-footer-menu"/>
      </S.Container>
      <GlobalStyles/>
    </>
  );
};

export default Layout;
