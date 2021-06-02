import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: min(800px, 100vw);

  margin: 0 auto;

  @media(min-width: 1000px){
    margin-right: 60px;
  }

  @media(max-width: 800px){
    padding: 0 42px;
  }

  @media(max-width: 500px){
    padding: 0 24px;
  }
`;