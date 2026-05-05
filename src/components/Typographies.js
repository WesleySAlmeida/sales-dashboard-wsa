import styled from 'styled-components';
import { pxToRem } from '@/utils';
export const StyledH1 = styled.h1 `
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 24)};
  font-weight: ${(props) => props.weight || 600};
  letter-spacing: ${pxToRem(-1)};
  line-height: ${(props) => pxToRem(props.lineheight || 36)};
`;
export const StyledH2 = styled.h2 `
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => props.weight || 600};
  line-height: ${(props) => pxToRem(props.lineheight || 24)};
`;
export const StyledH3 = styled.h2 `
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => props.weight || 600};
  line-height: ${(props) => pxToRem(props.lineheight || 24)};
`;
export const StyledP = styled.p `
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => props.weight || 400};
  line-height: ${(props) => pxToRem(props.lineheight || 24)};
`;
export const StyledSpan = styled.span `
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => props.weight || 400};
  line-height: ${(props) => pxToRem(props.lineheight || 24)};
`;
export const StyledUl = styled.ul `
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => props.weight || 400};
  line-height: ${(props) => pxToRem(props.lineheight || 24)};
  list-style-position: inside;
  li {
    list-style-position: outside;
    margin-left: ${pxToRem(15)};
  }
`;
