import React from 'react';
import SocialButton from '../SocialButton';

import * as S from './styles';
import { useStaticQuery, graphql } from 'gatsby';

interface HeaderProps {
  id: string;
}

const Header: React.FC<HeaderProps> = ({ id }) => {
  const {
    site: {
      siteMetadata: {
        company: {
          instagram,
          facebook,
          linkedin,
        }
      }
    }
  } = useStaticQuery(graphql`
    query CompanyData {
      site {
        siteMetadata {
          company {
            instagram
            facebook
            linkedin
          }
        }
      }
    }
  `);
  return (
    <S.Container id={id}>
      <S.MenuWrapper>
        <S.MenuIcon/>
      </S.MenuWrapper>
      <S.LogoWrapper>
        <h1>Header</h1>
      </S.LogoWrapper>
      <S.IconsWrapper>
        <SocialButton id="instagram-button" url={instagram}>
          <S.InstagramIcon/>
        </SocialButton>
        <SocialButton id="facebook-button" url={facebook}>
          <S.FacebookIcon/>
        </SocialButton>
        <SocialButton id="linkedin-button" url={linkedin}>
          <S.LinkedinIcon/>
        </SocialButton>
      </S.IconsWrapper>
    </S.Container>
  );
};

export default Header;
