import styled, { css } from 'styled-components';

import { LeftArrowAlt, RightArrowAlt} from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  padding: 24px 0;

  span {
    color: var(--twitter);
    
    @media(max-width: 500px){
    display: none;
  }
  }
`;


const iconsCSS = css`
  width: 24px;
  fill: var(--twitter);

  @media(max-width: 500px){
    width: 36px;
  }
`;

export const LeftArrow = styled(LeftArrowAlt)`
  ${iconsCSS};
`;

export const RightArrow = styled(RightArrowAlt)`
  ${iconsCSS};
`;