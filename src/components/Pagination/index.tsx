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
  previousTitle: string,
  nextTitle: string,
}

const Pagination: React.FC<PaginationProps> = ({ 
  id,
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
    <S.Container id={id}>
      {!isFirst && prevPage &&
        <LinkElement 
        id="previous-page-button" 
        url={prevPage}
        >
          <S.LeftArrow/>
          <S.Wrapper>
            {
              !isPost ? <span>Página Anterior</span> : <span>{previousTitle}</span>
            }
          </S.Wrapper>
        </LinkElement>
      }
      {!isPost && 
        <span>Página {currentPage}/{numPages}</span>
      }
      {!isLast && nextPage &&
        <LinkElement 
        id="next-page-button" 
        url={nextPage}>
          <S.Wrapper>
          {
            !isPost ? <span>Pŕoxima Página</span> : <span>{nextTitle}</span>
          }
            
          </S.Wrapper>
          <S.RightArrow/>
      </LinkElement>
      }
    </S.Container>
  );
};

export default Pagination;
