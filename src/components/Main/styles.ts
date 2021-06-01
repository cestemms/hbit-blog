import styled from 'styled-components';

interface ContainerProps {
  post?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${props => props.post ? 'min(600px, 100vw)' : 'min(800px, 100vw)'};

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