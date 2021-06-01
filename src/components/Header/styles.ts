import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(1000px, 100vw);

  margin-top: 48px;

  padding: 0 48px;

  @media(max-width: 800px){
    margin-top: 100px;
    padding: 0 42px;
  }

  @media(max-width: 500px){
    padding: 0 24px;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;

  width: 100%;
  height: 360px;
  border-radius: 20px;

  background-color: #666;

  padding: 48px;

  @media(max-width: 500px){
    padding: 24px;
  }
`;

export const LinkElement = styled(Link)`
  text-decoration: none;

  > span {
    text-transform: uppercase;
  }
`;