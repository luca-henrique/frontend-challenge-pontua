import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ErrorMessage} from '../../../constants/error-message';

const schema = yup.object({
  email: yup
    .string()
    .email(ErrorMessage['only-email'])
    .required(ErrorMessage['email-required']),
});

interface SignInFormProps {
  email: string;
}

export const useRecoveryAccount = () => {
  const {handleSubmit, control, formState} = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  const {errors} = formState;

  const handleFormSubmit = (data: SignInFormProps) => {
    console.log(data);
  };

  return {errors, handleFormSubmit: handleSubmit(handleFormSubmit), control};
};
