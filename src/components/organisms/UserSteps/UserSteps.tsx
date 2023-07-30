import {useContext} from 'react';
import {StepContextType} from '../../../@types/step';
import {UserStepContext} from '../../../context/UserStepsContextProvider';
import {RecoveryAccountConfirmation} from '../../molecules/RecoveryAccountConfirmation/RecoveryAccountConfirmation';
import {RecoveryAccountForm} from '../../molecules/RecoveryAccountForm/RecoveryAccountForm';
import {SelectAgentForm} from '../../molecules/SelectAgentForm/SelectAgentForm';
import {SignInForm} from '../../molecules/SignInForm/SignInForm';

const Steps = {
  0: SignInForm,
  1: RecoveryAccountForm,
  2: RecoveryAccountConfirmation,
  3: SelectAgentForm,
};

export const UserSteps = () => {
  const {step} = useContext(UserStepContext) as StepContextType;

  const Step = Steps[step];

  return <Step />;
};
