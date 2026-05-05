import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
//COMPONENTS
import { CardComponent, CustomTable, FormComponent, Header, StyledH2, StyledButton, StyledSpan, StyledP, } from '@/components';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// HOOKS
import { useFormValidation, useGet, useDelete, usePost } from '@/hooks';
function Leads() {
    //HOOKS
    const { data: createLeadsData, loading: createLeadsLoading, error: createLeadsError, postData: createLeadsPostData, } = usePost('leads/create', true);
    const { data: leadsData, loading: leadsLoading, error: leadsError, getData: getLeads, } = useGet('leads');
    const { deleteData: leadsDeleteData, loading: leadsDeleteLoading } = useDelete('leads/delete');
    //FORM
    const inputs = [
        { name: 'name', type: 'text', placeholder: 'Nome', required: true },
        { name: 'email', type: 'email', placeholder: 'Email', required: true },
        { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
    ];
    const { formValues, formValid, handleChange } = useFormValidation(inputs);
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createLeadsPostData({
            name: String(formValues[0]),
            email: String(formValues[1]),
            phone: String(formValues[2]),
        });
    };
    const handleDelete = async (id) => {
        if (confirm('Tem certeza que deseja excluir seu lead?')) {
            try {
                await leadsDeleteData({ params: { id: id } });
                alert('Lead deletado com sucesso!');
                getLeads();
            }
            catch (e) {
                alert('Não foi possivel realizar esta operação. Entre em contato com nosso suporte');
            }
        }
    };
    const [createMessage, setCreateMessage] = useState({
        type: 'success',
        msg: '',
    });
    const clearMessage = () => {
        setTimeout(() => {
            setCreateMessage({
                type: 'success',
                msg: '',
            });
        }, 3000);
    };
    useEffect(() => {
        if (createLeadsData?.id) {
            setCreateMessage({
                type: 'success',
                msg: 'Lead criado com sucesso!',
            });
            getLeads();
            clearMessage();
        }
        else if (createLeadsError) {
            setCreateMessage({
                type: 'error',
                msg: 'Não foi possivel realizar esta operação. Entre em contato com nosso suporte',
            });
        }
        else {
            clearMessage();
        }
    }, [createLeadsData, createLeadsError]);
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Container, { className: "mb-2", maxWidth: "lg", children: _jsxs(Grid, { container: true, spacing: 4, children: [_jsx(Grid, { item: true, xs: 12, sm: 7, children: _jsx(CardComponent, { className: leadsLoading ? 'skeleton-loading skeleton-loading-mh-2' : '', children: !leadsError && leadsLoading && (_jsxs(_Fragment, { children: [_jsx(StyledH2, { className: "mb-1", children: "Meus Leads" }), leadsData?.length ? (_jsx(CustomTable, { headers: ['Nome', 'Email', 'Telefone', ''], rows: leadsData.map((lead) => [
                                                _jsx(StyledP, { children: lead.name }),
                                                _jsx(StyledP, { children: lead.email }),
                                                _jsx(StyledP, { children: lead.phone }),
                                                _jsx(StyledButton, { className: "borderless-alert", onClick: () => handleDelete(lead.id), disabled: leadsDeleteLoading, children: "Excluir" }),
                                            ]) })) : (_jsx(StyledSpan, { children: "Sem leads cadastrados" }))] })) }) }), _jsx(Grid, { item: true, xs: 12, sm: 5, children: _jsxs(CardComponent, { children: [_jsx(StyledH2, { className: "mb-1", children: "Cadastrar Leads" }), _jsx(FormComponent, { inputs: inputs.map((input, index) => ({
                                            ...input,
                                            type: input.type,
                                            placeholder: input.placeholder,
                                            value: formValues[index] || '',
                                            onChange: (e) => handleChange(index, e.target.value),
                                        })), buttons: [
                                            {
                                                className: 'primary',
                                                disabled: !formValid || createLeadsLoading || leadsDeleteLoading,
                                                type: 'submit',
                                                onClick: handleSubmit,
                                                children: 'Cadastrar Lead',
                                            },
                                        ], message: createMessage })] }) })] }) })] }));
}
export default Leads;
