import React from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import Main from '../Main';
import Sidebar from '../Sidebar';
import Pagination from '../Pagination';
import Footer from '../Footer';

import { GlobalStyles } from '../../styles/global';

import * as S from './styles';

interface LayoutProps {
  children: React.ReactNode;
  isIndex?: boolean;
  isPost?: boolean;
  is404?: boolean;
  isFirst?: boolean, 
  isLast?: boolean, 
  currentPage?: number, 
  numPages?: number,
  prevPage?: string,
  nextPage?: string,
  previousTitle?: string;
  nextTitle?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  isIndex, 
  is404, 
  isPost,
  isFirst, 
  isLast, 
  currentPage, 
  numPages,
  prevPage,
  nextPage,
  previousTitle,
  nextTitle,
}) => {
  return (
    <>
      <S.Container>
        <Navbar id="app-navbar"/>
        {isIndex && <Header id="app-header"/>}
        <S.Wrapper>
          <Main id="main-content">
            {children}
            <Pagination id="app-pagination"
              isPost={isPost}
              isFirst={isFirst} 
              isLast={isLast} 
              currentPage={currentPage}
              numPages={numPages}
              prevPage={prevPage}
              nextPage={nextPage}
              previousTitle={previousTitle}
              nextTitle={nextTitle}
            />
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
