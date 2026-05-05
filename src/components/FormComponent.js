import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledButton, StyledInput } from '@/components';
import styled from 'styled-components';
import { pxToRem } from '@/utils';
export const StyledForm = styled.form `
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(16)};
`;
function FormComponent(props) {
    const { inputs, buttons, message } = props;
    return (_jsxs(StyledForm, { children: [inputs.map((inputProps, index) => (_jsx(StyledInput, { ...inputProps }, index))), buttons.map((buttonProps, index) => (_jsx(StyledButton, { ...buttonProps }, index))), message && (_jsx("div", { style: { color: message.type === 'error' ? 'red' : 'green' }, children: message.msg }))] }));
}
export default FormComponent;
