import React, { useState, useCallback } from 'react';

import SocialButton from '../SocialButton';

import * as S from './styles';
import { useStaticQuery, graphql } from 'gatsby';
import Toogle from '../Toogle';
import TagMenu from '../TagMenu';
import Logo from '../Logo';

interface NavbarProps {
  id: string;
}

const Navbar: React.FC<NavbarProps> = ({ id }) => {
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

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = useCallback (() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <S.Container id={id}>
      <S.Wrapper>
      <S.MenuWrapper>
        <S.MenuIcon onClick={handleOpenMenu}/>
      </S.MenuWrapper>
      <S.LogoWrapper>
        <Logo id="company-logo"/>
      </S.LogoWrapper>
      <S.IconsWrapper>
        <Toogle id="toogle"/>
        <div>
          <SocialButton id="instagram-button" url={instagram}>
            <S.InstagramIcon/>
          </SocialButton>
          <SocialButton id="facebook-button" url={facebook}>
            <S.FacebookIcon/>
          </SocialButton>
          <SocialButton id="linkedin-button" url={linkedin}>
            <S.LinkedinIcon/>
          </SocialButton>
        </div>
      </S.IconsWrapper>
      </S.Wrapper>
      <TagMenu id="tag-menu" open={isOpen}/>
    </S.Container>
  );
};

export default Navbar;
