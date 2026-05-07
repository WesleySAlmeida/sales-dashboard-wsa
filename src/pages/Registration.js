import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//COMPONENTS
import { Box, Container, Grid } from '@mui/material';
import { BannerImage, FormComponent, StyledH1, Logo, StyledP, StyledUl, } from '@/components';
import { pxToRem } from '@/utils';
//HOOKS
import { useFormValidation, usePost } from '@/hooks';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { setMessage, setProfileData } from '@/redux/slices/createProfile';
function Registration() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { email } = useSelector((state) => state.createProfile);
    const { data, loading, error, postData } = usePost('profile/create');
    //FORM STEP1
    const step1Inputs = [
        { name: 'name', type: 'text', placeholder: 'Nome', required: true },
        { name: 'email', type: 'email', placeholder: 'Email' },
        { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
    ];
    const handleStep1 = (e) => {
        e.preventDefault();
        dispatch(setProfileData({
            email: String(step1FormValues[1]),
        }));
    };
    const { formValues: step1FormValues, formValid: step1FormValid, handleChange: step1FormHandleChange, } = useFormValidation(step1Inputs);
    //FORM STEP2
    const step2Inputs = [
        { type: 'password', placeholder: 'Senha' },
    ];
    const handleStep2 = async (e) => {
        e.preventDefault();
        await postData({
            name: String(step1FormValues[0]),
            email: String(step1FormValues[1]),
            phone: String(step1FormValues[2]),
            password: String(step2FormValues[0]),
        });
    };
    const { formValues: step2FormValues, formValid: step2FormValid, handleChange: step2FormHandleChange, } = useFormValidation(step2Inputs);
    const handleStepInputs = email ? step2Inputs : step1Inputs;
    useEffect(() => {
        if (data !== null) {
            dispatch(setMessage('Usuario criado com sucesso!'));
            navigate('/');
        }
        else if (error) {
            alert(`Não foi possivel realizar esta operação. Entre em contato com nosso suporte (${error})`);
        }
    }, [data, error, navigate]);
    return (_jsx(Box, { children: _jsxs(Grid, { container: true, children: [_jsx(Grid, { item: true, xs: 12, sm: 6, sx: {
                        alignItems: 'center',
                        display: 'flex',
                        height: '100vh',
                    }, children: _jsxs(Container, { maxWidth: "sm", children: [_jsx(Box, { sx: { marginBottom: pxToRem(24) }, children: _jsx(Logo, { height: 41, width: 100 }) }), _jsxs(Box, { sx: { marginBottom: pxToRem(24) }, children: [_jsx(StyledH1, { children: email ? 'Defina sua senha' : 'Faça o seu cadastro' }), _jsxs(StyledP, { children: ['', email
                                                ? 'Sua senha deve ter: '
                                                : 'Primeiro, diga-nos quem você é'] }), email && (_jsxs(StyledUl, { children: [_jsx("li", { children: "Entre 8 e 16 caracteres;" }), _jsx("li", { children: "Pelo menos uma letra mai\u00FAscula;" }), _jsx("li", { children: "Pelo menos um caractere especial." }), _jsx("li", { children: "Pelo menos um n\u00FAmero" })] }))] }), _jsx(FormComponent, { inputs: handleStepInputs.map((input, index) => ({
                                    type: input.type,
                                    placeholder: input.placeholder,
                                    value: email
                                        ? step2FormValues[index] || ''
                                        : step1FormValues[index] || '',
                                    onChange: (e) => email
                                        ? step2FormHandleChange(index, e.target.value)
                                        : step1FormHandleChange(index, e.target.value),
                                })), buttons: [
                                    {
                                        className: 'primary',
                                        disabled: email
                                            ? !step2FormValid || loading
                                            : !step1FormValid,
                                        onClick: email ? handleStep2 : handleStep1,
                                        type: 'submit',
                                        children: email ? 'Enviar' : 'Próximo',
                                    },
                                ] })] }) }), _jsx(Grid, { item: true, sm: 6, sx: {
                        display: { xs: 'none', sm: 'block' },
                    }, children: _jsx(BannerImage, {}) })] }) }));
}
export default Registration;
