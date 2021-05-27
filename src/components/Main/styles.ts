import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: min(800px, 100vw);

  border: 1px solid red;

  margin: 0 auto;

  @media(min-width: 800px){
    margin-right: 60px;
  }
`;