import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { StyledH2, StyledSpan } from '@/components';
import { Avatar, Box } from '@mui/material';
import { pxToRem } from '@/utils';
function AvartarList(props) {
    return (_jsx(_Fragment, { children: props.listData.map((item, index) => (_jsxs(Box, { sx: {
                alignItems: 'center',
                display: 'flex',
                padding: `${pxToRem(12)} 0`,
                key: { index },
            }, children: [_jsx(Box, { children: _jsx(Avatar, { alt: item.name, src: item.avatar, sx: {
                            width: pxToRem(48),
                            height: pxToRem(48),
                            marginRight: pxToRem(16),
                        } }) }), _jsxs(Box, { children: [_jsx(StyledH2, { children: item.name }), _jsx(StyledSpan, { children: item.subtitle })] })] }))) }));
}
export default AvartarList;
