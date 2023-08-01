/* eslint-disable @typescript-eslint/ban-ts-comment */
import {useContext} from 'react';
import {StepContextType} from '@/@types/step';
import {UserStepContext} from '@/context/';

import {
  SignInForm,
  RecoveryAccountConfirmation,
  RecoveryAccountForm,
  SelectAgentForm,
} from '@/components/';

const Steps = {
  0: SignInForm,
  1: RecoveryAccountForm,
  2: RecoveryAccountConfirmation,
  3: SelectAgentForm,
};

export const UserSteps = () => {
  const {step} = useContext(UserStepContext) as StepContextType;

  //@ts-ignore
  const Step = Steps[step];

  return <Step />;
};
