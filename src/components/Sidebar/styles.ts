import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: auto;

  margin: 48px 0;

  @media(max-width: 800px){
    width: 100%;
    height: fit-content;
    padding: 0 42px;
  }

  @media(max-width: 500px){
    padding: 0 24px;
  }
`;