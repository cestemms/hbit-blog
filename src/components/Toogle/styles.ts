import styled, { css } from 'styled-components';

interface TooltipProps {
  isHovered?: boolean;
}

interface WrapperProps {
  isLight?: boolean;
}

export const Container = styled.span`
  display: flex;
  align-items: center;
  position: relative;

  margin: 0 8px;

  cursor: pointer;
`;

export const Tooltip = styled.span<TooltipProps>`
  font-size: 14px;
  font-weight: bold;

  position: absolute;

  display: none;

  padding: 4px 8px;
  border-radius: 4px;
  background-color: var(--search);

  ${props => props.isHovered && css`
      display: inline-block;
  `};

  top: calc(100% + 2px);
  left: 50%;
      transform: translateX(-50%);

  &::before {
      content: '';
      position: absolute;
      border-style: solid;
      border-color: var(--search) transparent;
      border-width: 0px 4px 4px 4px;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
  }
`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: flex-start;
  width: 24px;
  border-radius: 6px;

  background-color: var(--outline);

  div {
    width: 12px;
    height: 12px;

    border-radius: 50%;

    background-color: var(--twitter);

    ${props => props.isLight && css`
      transform: translateX(11px);
  `};
  }
`;
