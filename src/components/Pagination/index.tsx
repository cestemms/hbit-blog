import React from 'react';
import LinkElement from '../LinkElement';

import * as S from './styles';

interface PaginationProps {
  id: string;
  isPost?: boolean,
  isFirst?: boolean,
  isLast?: boolean,
  currentPage?: number,
  numPages?: number,
  prevPage?: string,
  nextPage?: string,
}

const Pagination: React.FC<PaginationProps> = ({ 
  id,
  isPost, 
  isFirst, 
  isLast, 
  currentPage, 
  numPages,
  prevPage,
  nextPage 
}) => {

  return (
    <S.Container id={id}>
      {!isFirst && 
        <LinkElement 
        id="previous-page-button" 
        url={prevPage}
        >
          <S.LeftArrow/>
          <span>Página Anterior</span>
        </LinkElement>
      }
      {!isPost && 
        <span>Página {currentPage}/{numPages}</span>
      }
      {!isLast &&
        <LinkElement 
        id="next-page-button" 
        url={nextPage}>
          <span>Pŕoxima Página</span>
          <S.RightArrow/>
      </LinkElement>
      }
    </S.Container>
  );
};

export default Pagination;
