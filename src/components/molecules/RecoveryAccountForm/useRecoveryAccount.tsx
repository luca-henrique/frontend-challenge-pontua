import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ErrorMessage} from '../../../constants/error-message';
import {UserStepContext} from '../../../context/UserStepsContextProvider';
import {StepContextType} from '../../../@types/step';
import {useContext} from 'react';

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

  const {changerStep} = useContext(UserStepContext) as StepContextType;

  const {errors} = formState;

  const handleFormSubmit = (data: SignInFormProps) => {
    console.log(data);
    changerStep(2);
  };

  return {errors, handleFormSubmit: handleSubmit(handleFormSubmit), control};
};
