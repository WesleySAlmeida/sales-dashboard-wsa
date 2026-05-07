import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useState } from 'react';
import { AppThemeContext } from '@/contexts/AppThemeContext';
import Cookies from 'js-cookie';
// COMPONENTS
import { CardComponent, FormComponent, Header, StyledH2, StyledButton, } from '@/components';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// HOOKS
import { useFormValidation, useGet, useDelete, usePut } from '@/hooks';
// SERVICES
import { logout } from '@/services';
function Profile() {
    const themeContext = useContext(AppThemeContext);
    //HOOKS
    const [updateMessage, setUpdateMessage] = useState({
        type: 'success',
        msg: '',
    });
    const clearMessage = () => {
        setTimeout(() => {
            setUpdateMessage({
                type: 'success',
                msg: '',
            });
        }, 3000);
    };
    const { data: profileData, loading: profileLoading, error: profileError, } = useGet('profile');
    const { data: profileUpdateData, putData: profilePutData, loading: profileUpdateLoading, error: profileUpdateError, } = usePut('profile/update');
    // ✅ só desestruturamos o que realmente usamos
    const { deleteData: profileDeleteData, loading: profileDeleteLoading } = useDelete('profile/delete');
    useEffect(() => {
        if (profileData) {
            handleChange(0, profileData.name);
            handleChange(1, profileData.name);
            handleChange(2, profileData.phone);
        }
    }, [profileData]);
    // FORM
    const inputs = [
        { name: 'name', type: 'text', placeholder: 'Nome', required: true },
        { name: 'email', type: 'email', placeholder: 'Email', disabled: true },
        { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
    ];
    const { formValues, formValid, handleChange } = useFormValidation(inputs);
    const handleSubmit = async (e) => {
        e.preventDefault();
        await profilePutData({
            name: String(formValues[0]),
            phone: String(formValues[2]),
        });
    };
    const handleDelete = async () => {
        if (confirm('Tem certeza que deseja excluir sua conta? Se sim, certifique-se de deletar os seus leads antes')) {
            try {
                await profileDeleteData();
                alert('perfil deletado com sucesso!');
                Cookies.remove('Authorization');
                window.location.href = '/';
            }
            catch (e) {
                alert('Não foi possivel realizar esta operação. Entre em contato com nosso suporte');
            }
        }
    };
    useEffect(() => {
        if (profileUpdateData !== null) {
            setUpdateMessage({
                msg: 'Perfil atualizado com sucesso!',
                type: 'success',
            });
        }
        else if (profileUpdateError) {
            setUpdateMessage({
                msg: 'Não foi possivel realizar esta operação. Entre em contato com nosso suporte',
                type: 'error',
            });
        }
        clearMessage();
    }, [profileUpdateData, profileUpdateError]);
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Container, { className: "mb-2", maxWidth: "lg", children: _jsxs(Grid, { container: true, spacing: 4, children: [_jsx(Grid, { item: true, xs: 12, sm: 6, children: !profileError && (_jsx(CardComponent, { className: profileLoading ? 'skeleton-loading skeleton-loading-mh-1' : '', children: !profileLoading && profileData && (_jsxs(_Fragment, { children: [_jsx(StyledH2, { className: "mb-1", children: "Seus Dados" }), _jsx(FormComponent, { inputs: inputs.map((input, index) => ({
                                                ...input,
                                                type: input.type,
                                                placeholder: input.placeholder,
                                                value: formValues[index] || '',
                                                onChange: (e) => handleChange(index, e.target.value),
                                            })), buttons: [
                                                {
                                                    className: 'primary',
                                                    disabled: !formValid || profileUpdateLoading,
                                                    type: 'submit',
                                                    onClick: handleSubmit,
                                                    children: profileUpdateLoading
                                                        ? 'Aguarde...'
                                                        : 'Atualizar meu perfil',
                                                },
                                                {
                                                    className: 'alert',
                                                    disabled: profileDeleteLoading,
                                                    type: 'button',
                                                    onClick: handleDelete,
                                                    children: profileDeleteLoading
                                                        ? 'Aguarde...'
                                                        : 'Excluir minha conta',
                                                },
                                            ], message: updateMessage })] })) })) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsxs(CardComponent, { children: [_jsx(StyledH2, { className: "mb-1", children: "Defini\u00E7\u00F5es de conta" }), _jsxs(StyledButton, { className: "primary mb-1", onClick: themeContext?.toggleTheme, children: ["Trocar para tema", ' ', themeContext?.appTheme === 'light' ? 'escuro' : 'claro'] }), _jsx(StyledButton, { className: "alert", onClick: logout, children: "Logout" })] }) })] }) })] }));
}
export default Profile;
