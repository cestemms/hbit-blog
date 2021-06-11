import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px 0;

  @media(min-width: 1080px){
    max-width: 250px;
  }

  @media(max-width: 800px){
    width: 100%;
    height: fit-content;
    padding: 0 42px;
  }

  @media(max-width: 500px){
    padding: 0 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 10%;
`;