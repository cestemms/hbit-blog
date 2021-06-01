import styled from 'styled-components';
interface ContainerProps {
  open: boolean;
}

export const Container = styled.nav<ContainerProps>`
    display: flex;
    width: min(1160px, 100%);

    padding: 16px;
    border-bottom: 1px solid var(--outline);

  > ul {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }


  @media(max-width: 800px){
    > ul {
      display: ${props => props.open ? 'block' : 'none'};
      flex-direction: column;
      width: auto;
      position: absolute;
      top: 16px;
      left: 50px;
      z-index: 4;

      padding: 16px;
      border-radius: 4px;
      background-color: var(--secondary);
    }
    
    border-bottom: none;
  }
`;

export const TagLink = styled.li`
  .active{
    color: var(--twitter);
  }
`;