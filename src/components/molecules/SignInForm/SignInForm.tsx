import {InputText} from '../../atoms/InputText/InputText';
import {Container, ContainerForm, Title, Paragraphy} from './style';
import {Button} from '../../atoms/Button/Button';
import {RecoveryAccountLinkContainer} from '../RecoveryAccountLinkContainer/RecoveryAccountLinkContainer';
import {useSignIn} from './useSignIn';
import {Separator} from '@/components';

export const SignInForm = () => {
  const {handleFormSubmit, control, errors} = useSignIn();

  return (
    <Container>
      <ContainerForm onSubmit={handleFormSubmit}>
        <Title>
          Bem Vindo<label>.</label>
        </Title>
        <Separator height={6} />
        <Paragraphy>informe as suas credenciais de acesso ao portal</Paragraphy>
        <Separator height={6} />
        <InputText
          name='email'
          type='email'
          placeholder='Informe seu email'
          control={control}
          errors={errors?.email?.message}
        />
        <InputText
          name='password'
          type='password'
          placeholder='Informe sua senha'
          control={control}
          errors={errors?.password?.message}
        />
        <Separator height={6} />
        <Button type='submit' icon='name'>
          entrar
        </Button>
        <RecoveryAccountLinkContainer />
      </ContainerForm>
    </Container>
  );
};
