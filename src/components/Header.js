import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Logo } from '@/components';
import { Avatar, Box, Container } from '@mui/material';
import { pxToRem } from '@/utils';
const StyledHeader = styled.header `
  background-color: ${(props) => props.theme.appBackground};
  border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.appDefaultStroke};
  margin-bottom: ${pxToRem(37)};
  width: 100%;
`;
function Header() {
    return (_jsx(StyledHeader, { children: _jsx(Container, { maxWidth: "lg", children: _jsxs(Box, { sx: {
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: pxToRem(64),
                }, children: [_jsx(Link, { to: "/home", children: _jsx(Logo, { height: 30, width: 73 }) }), _jsx(Link, { to: "perfil", children: _jsx(Avatar, { alt: "DNC Avatar", src: "/dnc-avatar.svg", sx: { width: pxToRem(40), height: pxToRem(40) } }) })] }) }) }));
}
export default Header;
