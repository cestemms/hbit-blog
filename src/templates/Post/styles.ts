import styled, { css } from 'styled-components';
import {
  FacebookCircle,
  Linkedin,
  Whatsapp,
  Twitter
} from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: justify;
    text-justify: inter-word;
    font-size: 16px;
    line-height: 1.75;
  }

  h1 {
    font-size: 48px;

    margin: 24px 0;
  }

  h2 {
    font-size: 32px;

    margin: 32px 0;
  }

  h3 {
    font-size: 24px;

    margin: 32px 0;
  }

  > img {
    display: flex;
    width: 100%;
    height: auto;
    border-radius: 20px;

    margin: 0 24px;
  }

  .date-row {
    margin: 20px 0;
    
    display: flex;
    justify-content: space-between;
  }

  .time-to-read {
    padding: 4px;
    background-color: var(--gray);

    border-radius: 4px;
  }

  margin: 48px;

  @media(max-width: 500px){
    margin: 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  @media(max-width: 800px){
    padding: 0 42px;
  }

  @media(max-width: 500px){
    padding: 0 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  width: min(600px, 100vw);

  @media(max-width: 800px){
    padding: 0 42px;
  }

  @media(max-width: 500px){
    padding: 0 24px;
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }

  blockquote {
    color: var(--primary);
    border-left: 0.3rem solid var(--twitter);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }

  hr {
    border: 1px solid var(--outline);
    margin: 3rem auto;
  }


  .gatsby-resp-image-background-image {
    margin: 24px 0;
  }
`;

export const MainImage = styled.div`
  width: auto;
  height: 360px;
  border-radius: 20px;

  background-color: #666;

  margin: 48px 0;

  @media(max-width: 500px){
    margin: 24px 0;
  }
`

export const Aside = styled.aside`
      display: block;
      max-width: 80px;

    > div {
      display: flex;
      flex-direction: column;

      padding: 0 20px;

      position: relative;

    @media(max-width: 700px){
      display: none;
    } 

    }
    
`

const iconsCSS = css`
  height: 20px;
  fill: var(--gray);

  margin: 16px;

  transition: all 0.5s ease-in-out;

  position: fixed;
  z-index: 9;

  transform: translate(30px, 300px);
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