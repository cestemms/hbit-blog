import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px;

  border-radius: 50%;

  cursor: pointer;

  transition: background-color 0.75s ease-in;

  &:hover{
    background-color: var(--gray);
  }
`;

