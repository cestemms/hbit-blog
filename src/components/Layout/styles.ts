import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary);
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;

  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  //max-width: 1000px;

  margin: 0 auto;


  @media(max-width: 1000px){
    flex-direction: column;
  }
`;
