import React from 'react';

import SocialButton from '../SocialButton';

import * as S from './styles';
import { useStaticQuery, graphql } from 'gatsby';

interface FooterProps {
  id: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
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
    query SocialData {
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
      <S.PhotosWrapper>
        <div>
          Image 1
        </div>
        <div>
          Image 2
        </div>
        <div>
          Image 3
        </div>
        <div>
          Image 4
        </div>
        <div>
          Image 5
        </div>
        <div>
          Image 6
        </div>
      </S.PhotosWrapper>
      <S.IconsWrapper>
        <S.HomeButton to="/" id="home-button">
          <S.HomeIcon/>
        </S.HomeButton>
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

export default Footer;
