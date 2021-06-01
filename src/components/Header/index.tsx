import React from 'react';

import Button from '../Button';
import LinkElement from '../LinkElement';

import * as S from './styles';

interface HeaderProps {
  id: string;
}

const Header: React.FC<HeaderProps> = ({ id }) => {
  
  return (
    <S.Container id={id}>
        <S.Post>
          <LinkElement id="tag-link" url="/" label="Lorem Ipsum" color="var(--white)" size={16}/>
          <LinkElement id="post-link" url="/" label="What is Lorem Ipsum and Where does it come from?" isTitle/>
          <LinkElement id="date-link" url="/" label="Maio 25, 2021" color="var(--white)" size={16}/>
          <Button id="read-more-button" url="/" fitContent>Leia Mais</Button>
        </S.Post>
    </S.Container>
  );
};

export default Header;
