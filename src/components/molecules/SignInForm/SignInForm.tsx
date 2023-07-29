import {InputText} from '../../atoms/InputText/InputText';
import {Container, ContainerForm, Title, Paragraphy} from './style';
import {useForm} from 'react-hook-form';

/*
  - Validação de e-mail e senha;
  - Navegar para próxima página;
  - Exibir mensagem de erro;
  - Ser o mais fiel possível ao layout do Figma.
*/

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Button} from '../../atoms/Button/Button';

import {ErrorMessage} from '../../../constants/error-message';
import {RecoveryAccountLinkContainer} from '../RecoveryAccountLinkContainer/RecoveryAccountLinkContainer';

const schema = yup.object({
  email: yup
    .string()
    .email(ErrorMessage['only-email'])
    .required(ErrorMessage['email-required']),
  password: yup.string().required(ErrorMessage['password-required']),
});

interface SignInFormProps {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const {handleSubmit, control, formState} = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {errors} = formState;

  const handleFormSubmit = (data: SignInFormProps) => {
    console.log(data);
  };

  return (
    <Container>
      <ContainerForm onSubmit={handleSubmit(handleFormSubmit)}>
        <form>
          <Title>
            Bem Vindo<label>.</label>
          </Title>
          <Paragraphy>
            informe as suas credenciais de acesso ao portal
          </Paragraphy>
          <div style={{height: '6px'}} />
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
          <div style={{height: '6px'}} />
          <Button type='submit'>entrar</Button>

          <RecoveryAccountLinkContainer />
        </form>
      </ContainerForm>
    </Container>
  );
};
