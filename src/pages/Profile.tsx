import { useContext, type ChangeEvent, useEffect, useState } from 'react';
import { AppThemeContext } from '@/contexts/AppThemeContext';

// COMPONENTS
import {
  CardComponent,
  FormComponent,
  Header,
  StyledH2,
  StyledButton,
} from '@/components';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// HOOOK
import { useFormValidation, useGet, useDelete, usePut } from '@/hooks';

// SERVICES
import { logout } from '@/services';

// TYPES
import type {
  InputProps,
  ProfileData,
  ProfileEditableData,
  MessageProps,
} from '@/types';

function Profile() {
  const themeContext = useContext(AppThemeContext);

  //HOOKS
  const [updateMessage, setUpdateMessage] = useState<MessageProps>({
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
  const {
    data: profileData,
    loading: profileLoading,
    error: profileError,
  } = useGet<ProfileData>('profile');

  const {
    data: profileUpdateData,
    putData: profilePutData,
    loading: profileUpdateLoading,
    error: profileUpdateError,
  } = usePut<ProfileEditableData>('profile/update');

  useEffect(() => {
    if (profileData) {
      handleChange(0, profileData.name);
      handleChange(1, profileData.name);
      handleChange(2, profileData.phone);
    }
  }, [profileData]);

  // FORM
  const inputs: InputProps[] = [
    { name: 'name', type: 'text', placeholder: 'Nome', required: true },
    { name: 'email', type: 'email', placeholder: 'Email', disabled: true },
    { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
  ];

  const { formValues, formValid, handleChange } = useFormValidation(inputs);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await profilePutData({
      name: String(formValues[0]),
      phone: String(formValues[2]),
    });
  };
  const handleDelete = async () => {
    confirm('WIP...');
  };

  useEffect(() => {
    if (profileUpdateData !== null) {
      setUpdateMessage({
        msg: 'Perfil atualizado com sucesso!',
        type: 'success',
      });
    } else if (profileUpdateError) {
      setUpdateMessage({
        msg: 'Não foi possivel realizar esta operação. Entre em contato com nosso suporte',
        type: 'error',
      });
    }
    clearMessage();
  }, [profileUpdateData, profileUpdateError]);

  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {!profileError && (
              <CardComponent
                className={
                  profileLoading ? 'skeleton-loading skeleton-loading-mh-1' : ''
                }
              >
                {!profileLoading && profileData && (
                  <>
                    <StyledH2 className="mb-1">Seus Dados</StyledH2>
                    <FormComponent
                      inputs={inputs.map((input, index) => ({
                        ...input,
                        type: input.type,
                        placeholder: input.placeholder,
                        value: formValues[index] || '',
                        onChange: (e: ChangeEvent<HTMLInputElement>) =>
                          handleChange(
                            index,
                            (e.target as HTMLInputElement).value
                          ),
                      }))}
                      buttons={[
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
                          type: 'button',
                          onClick: handleDelete,
                          children: 'Excluir minha conta',
                        },
                      ]}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardComponent>
              <StyledH2 className="mb-1">Definições de conta</StyledH2>
              <StyledButton
                className="primary mb-1"
                onClick={themeContext?.toggleTheme}
              >
                Trocar para tema {''}
                {themeContext?.appTheme === 'light' ? 'escuro' : 'claro'}
              </StyledButton>
              <StyledButton className="alert" onClick={logout}>
                Logout
              </StyledButton>
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Profile;
