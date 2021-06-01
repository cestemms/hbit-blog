import styled, { css } from 'styled-components';

import { 
  Menu, 
  Instagram, 
  FacebookCircle, 
Linkedin } from '../../styles/icons';

export const Container = styled.header`
  display: flex;
  flex-direction: column; 

  width: min(1160px, 100%);

  position: -webkit-sticky;
  z-index: 2;

  @media(max-width: 800px){
    position: fixed;
    top: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;

  background-color: var(--primary);
  border-bottom: 1px solid var(--outline);
`;

export const MenuWrapper = styled.div`
  display: flex;
  position: relative;

  > svg {
    margin: 0 8px;
  }

  @media(min-width: 800px){
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  > {
    margin: 0 8px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;

  > div {
    display: flex;

      > a {
      margin: 0 8px;
    }

    @media(max-width: 500px){
      display: none;
    }
  }
`;

const iconsCSS = css`
  width: 20px;
`;

export const MenuIcon = styled(Menu)`
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