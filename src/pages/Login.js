import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
// COMPONENTS
import { Box, Container, Grid } from '@mui/material';
import { BannerImage, FormComponent, StyledH1, Logo, StyledP, } from '@/components';
// HOOKS
import { useFormValidation, usePost } from '@/hooks';
// UTILS
import { jwtExpirationDateConverter, pxToRem } from '@/utils';
//REDUX
import { useSelector } from 'react-redux';
function Login() {
    const navigate = useNavigate();
    const { email, message } = useSelector((state) => state.createProfile);
    const inputs = [
        { type: 'email', placeholder: 'Email' },
        { type: 'password', placeholder: 'Senha' },
    ];
    const { data, loading, error, postData } = usePost('login');
    const { formValues, formValid, handleChange } = useFormValidation(inputs);
    const handleMessage = () => {
        if (!error)
            return { msg: message ?? '', type: 'success' };
        switch (error) {
            case 401:
                return { msg: 'Email e/ou senha inválido', type: 'error' };
            default:
                return {
                    msg: 'Não foi possivel realizar esta operação. Entre em contato com nosso suporte',
                    type: 'error',
                };
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await postData({
            email: String(formValues[0]),
            password: String(formValues[1]),
        });
    };
    useEffect(() => {
        if (data?.jwt_token) {
            const decoded = jwtDecode(data?.jwt_token);
            Cookies.set('Authorization', data?.jwt_token, {
                expires: jwtExpirationDateConverter(decoded.exp),
                secure: true,
            });
        }
        if (Cookies.get('Authorization'))
            navigate('/home');
    }, [data, navigate]);
    useEffect(() => {
        if (email) {
            handleChange(0, email);
        }
    }, [email]);
    return (_jsx(Box, { children: _jsxs(Grid, { container: true, children: [_jsx(Grid, { item: true, xs: 12, sm: 6, sx: {
                        alignItems: 'center',
                        display: 'flex',
                        height: '100vh',
                    }, children: _jsxs(Container, { maxWidth: "sm", children: [_jsx(Box, { sx: { marginBottom: pxToRem(24) }, children: _jsx(Logo, { height: 41, width: 100 }) }), _jsxs(Box, { sx: { marginBottom: pxToRem(24) }, children: [_jsx(StyledH1, { children: "Bem-vindo" }), _jsx(StyledP, { children: "Digite sua senha e email para logar" })] }), _jsx(FormComponent, { inputs: inputs.map((input, index) => ({
                                    type: input.type,
                                    placeholder: input.placeholder,
                                    value: formValues[index] || '',
                                    onChange: (e) => handleChange(index, e.target.value),
                                })), buttons: [
                                    {
                                        className: 'primary',
                                        disabled: !formValid || loading,
                                        type: 'submit',
                                        onClick: handleSubmit,
                                        children: loading ? 'Aguarde...' : 'Login',
                                    },
                                ], message: handleMessage() })] }) }), _jsx(Grid, { item: true, sm: 6, sx: {
                        display: { xs: 'none', sm: 'block' },
                    }, children: _jsx(BannerImage, {}) })] }) }));
}
export default Login;
