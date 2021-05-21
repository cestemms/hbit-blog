import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--primary);
  border-bottom: 1px solid var(--outline);

  padding: 16px;
`;