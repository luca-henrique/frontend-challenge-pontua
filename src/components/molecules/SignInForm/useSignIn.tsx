/*
  - Validação de e-mail e senha;
  - Navegar para próxima página;
  - Exibir mensagem de erro;
  - Ser o mais fiel possível ao layout do Figma.
*/

import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ErrorMessage} from '../../../constants/error-message';

import {StepContextType} from '../../../@types/step';
import {UserStepContext} from '../../../context/UserStepsContextProvider';
import {useContext} from 'react';

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

export const useSignIn = () => {
  const {handleSubmit, control, formState} = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {errors} = formState;

  const {changerStep} = useContext(UserStepContext) as StepContextType;

  const handleFormSubmit = (data: SignInFormProps) => {
    console.log(data);
    changerStep(3);
  };

  return {errors, handleFormSubmit: handleSubmit(handleFormSubmit), control};
};
