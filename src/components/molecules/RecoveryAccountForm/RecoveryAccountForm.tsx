import {Button} from '../../atoms/Button/Button';
import {InputText} from '../../atoms/InputText/InputText';
import {Container, ContainerForm, Title, Paragraphy} from './style';
import {useRecoveryAccount} from './useRecoveryAccount';

export const RecoveryAccountForm = () => {
  const {control, errors, handleFormSubmit} = useRecoveryAccount();

  return (
    <Container>
      <ContainerForm onSubmit={handleFormSubmit}>
        <Title>
          Recuperar senha<label>.</label>
        </Title>
        <Paragraphy>
          Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de
          um link com as instruções para você redefinir a sua senha.
        </Paragraphy>
        <div style={{height: '6px'}} />

        <InputText
          name='email'
          type='email'
          placeholder='Informe seu email'
          control={control}
          errors={errors?.email?.message}
        />

        <Button type='submit'>enviar link</Button>
      </ContainerForm>
    </Container>
  );
};
