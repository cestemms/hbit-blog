import React from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import Main from '../Main';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

import { GlobalStyles } from '../../styles/global';

import * as S from './styles';

interface LayoutProps {
  children: React.ReactNode;
  isIndex?: boolean;
  is404?: boolean;
  post?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, isIndex, is404, post }) => {
  return (
    <>
      <S.Container>
        <Navbar id="app-navbar"/>
        {isIndex && <Header id="app-header"/>}
        <S.Wrapper>
          <Main id="main-content" post={post}>
            {children}
          </Main>
          {!is404 && <Sidebar id="app-sidebar" />}
        </S.Wrapper>
        <Footer id="app-footer"/>
      </S.Container>
      <GlobalStyles/>
    </>
  );
};

export default Layout;
