import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: min(1160px, 100%);
  padding: 16px;
  border-bottom: 1px solid var(--outline);


  @media(max-width: 800px){
    flex-direction: column;
    width: 150px;
    position: absolute;
    top: 10px;
    left: 40px;
    z-index: 4;
    border-bottom: none;
  }
`;