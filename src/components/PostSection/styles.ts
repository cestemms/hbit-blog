import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import {
  ArrowRight,
  FacebookCircle,
  Linkedin,
  Whatsapp,
  Twitter
} from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;

  padding: 48px 0;

  &:first-child{
    border-top: 1px solid var(--outline);
  }
  border-bottom: 1px solid var(--outline);

  @media(max-width: 800px){
    flex-direction: column;
  }
`;

export const ImageContainer = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;

  width: 380px;
  height: 285px;
  border-radius: 20px;

  background-color: #666;

  @media(max-width: 800px){
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const ReadMore = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 36px;
  position: absolute;
  bottom: 0;

  background-color: var(--twitter-dark-hover);

  transition: all 0.75s ease-in-out;
  
  &:hover{
    opacity: 0.5;
    cursor: pointer;
  }

  > span {
    display: flex;
    justify-content: center;
    margin: auto;
  }

  > div {
      display: flex;
      justify-content: center;
      width: 100%;

      padding: 8px;
      border-top: 1px solid var(--outline);
    }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;

  width: 380px;
  height: fit-content;

  > a{
    text-decoration: none;
  }

  > {
    &:not(:first-child){
      margin-top: 24px;
    }
  }

  @media(max-width: 800px){
    width: 100%;
    height: auto;

      > {
      &:not(:first-child){
        margin-top: 16px;
      }
    }
  }
`;

export const Tag = styled(Link)`
  font-size: 12px;
  color: var(--twitter);
  text-transform: uppercase;

  transition: all 0.3s ease-in-out;

  &:hover{
    text-shadow: .3px .3px .3px;
  }
`;

export const LinkElement = styled(Link)`
  &:hover{
      text-shadow: .3px .3px .3px;
    }
`;

export const Description = styled.div`
`;

export const ShareRow = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
`;

const iconsCSS = css`
  height: 22px;
  fill: var(--gray);

  margin-left: 16px;

  transition: all 0.5s ease-in-out;
`;

export const ArrowIcon = styled(ArrowRight)`
  height: 18px;
  margin-left: 14px;
  fill: var(--outline);
`;

export const FacebookIcon = styled(FacebookCircle)`
  ${iconsCSS};

  &:hover{
    fill: var(--facebook);
  }
`;

export const LinkedinIcon = styled(Linkedin)`
  ${iconsCSS};

  &:hover{
    fill: var(--linkedin);
  }
`;

export const WhatsappIcon = styled(Whatsapp)`
  ${iconsCSS};

  &:hover{
    fill: var(--whatsapp);
  }
`;

export const TwitterIcon = styled(Twitter)`
  ${iconsCSS};

  &:hover{
    fill: var(--twitter);
  }
`;