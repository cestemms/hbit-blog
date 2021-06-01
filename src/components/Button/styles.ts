import styled, { css} from 'styled-components';
import { Link } from 'gatsby';

interface ContainerProps {
  transparent?: boolean;
  fitContent: boolean;
}


export const Container = styled(Link)<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 14px;
  border-radius: 4px;

  cursor: pointer;

  background-color: ${props => props.transparent? 'transparent' : 'var(--twitter)'};
  
  text-decoration: none;
  color: var(--white);

  ${props => props.fitContent && css`
    width: fit-content;
  `}
`;