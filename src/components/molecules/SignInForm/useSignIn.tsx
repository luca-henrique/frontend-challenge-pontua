import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ErrorMessage} from '../../../constants/error-message';

import {toast} from 'react-toastify';

import {StepContextType} from '../../../@types/step';
import {UserStepContext} from '../../../context/UserStepsContextProvider';
import {useContext} from 'react';
import axios from 'axios';

/*

{
	"name": "Pontua",
	"email": "gente@pontua.com.br",
	"role": "Product Owner",
	"password": pontua123,
	"phonenumber": "123123123",
	"delete_at": null,
	"id": 7
}

*/

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
  const notifyErorCredentials = () =>
    toast.error('Credenciais estão incorretas', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  const {changerStep} = useContext(UserStepContext) as StepContextType;

  const handleSignInRequest = async (credentials: SignInFormProps) => {
    try {
      const {data} = await axios.post(
        'https://register-and-login-with-jwt-token.p.rapidapi.com/user/login',
        {username: credentials.email, password: credentials.password},
        {
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key':
              'b03117a6e1msh0c3ec4f6e3e6fb9p1d08d0jsn03bfe791e1b5',
            'X-RapidAPI-Host':
              'register-and-login-with-jwt-token.p.rapidapi.com',
          },
        },
      );

      localStorage.setItem('token', JSON.stringify(data.token));
    } catch (error) {
      notifyErorCredentials();
    }
  };

  const handleFormSubmit = (data: SignInFormProps) => {
    handleSignInRequest(data);

    //changerStep(3);
  };

  return {errors, handleFormSubmit: handleSubmit(handleFormSubmit), control};
};
