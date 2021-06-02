import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

interface ContainerProps {
  size?: number;
  color?: string;
  bold?: boolean;
  isTitle?: boolean;
}

export const Container = styled(Link)<ContainerProps>`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;

  transition: all 0.3s ease-in-out;

  &:hover{
    text-shadow: .3px .3px .3px;
  }

  font-size: ${props => props.size ? props.size : 14}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  color: ${props => props.color ? props.color : 'var(--twitter)'};

  ${props => props.isTitle && css`
      font-size: 30px;
      font-weight: bold;
      text-transform: none;
      color: var(--white);

      &:hover{
      text-shadow: .5px .5px .5px;
    }
  `}

  
`;