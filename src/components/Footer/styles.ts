import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import {
  Home,
  Instagram,
  FacebookCircle,
  Linkedin,
  Github
 } from '../../styles/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  background-color: var(--primary);

  position: -webkit-sticky;
  bottom: 0;

  @media(max-width: 500px){
    position: sticky;
  }
`;

export const PhotosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;

  @media(max-width: 800px){
    grid-template-columns: repeat(4, 1fr);

    > div {
      &:nth-child(6), 
      &:nth-child(5){
      display: none;
    }
    }
  }

  @media(max-width: 500px){
    display: none;
  }

  > div {
    display: flex;
    width: 100%;
    border: 1px solid #666;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  padding: 8px min(46px, max(10vw, 10px));

  border-top: 1px solid var(--outline);

  @media(min-width: 500px){
    display: none;
  }
`;

export const Signature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;

  a {
    text-decoration: none;
    
    &:hover{
      color: var(--twitter);
    }
  }
`;

export const HomeButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px;

  border-radius: 50%;

  cursor: pointer;

  transition: background-color 0.75s ease-in;

  &:hover{
    background-color: var(--gray);
  }
`;

const iconsCSS = css`
  width: 24px;
`;

export const HomeIcon = styled(Home)`
  ${iconsCSS};
`;

export const InstagramIcon = styled(Instagram)`
  ${iconsCSS};
`;

export const FacebookIcon = styled(FacebookCircle)`
  ${iconsCSS};
`;

export const LinkedinIcon = styled(Linkedin)`
  ${iconsCSS};
`;

export const GithubIcon = styled(Github)`
  width: 16px;
`;