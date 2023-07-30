import {useContext} from 'react';
import {StepContextType} from '../../../@types/step';
import {ICONS} from '../../../assets';
import {UserStepContext} from '../../../context/UserStepsContextProvider';
import {Container, IconRecoveryAccount, Link} from './style';
const recoveryAccountIcon = ICONS['recovery-account-icon'];

export const RecoveryAccountLinkContainer = () => {
  const {changerStep} = useContext(UserStepContext) as StepContextType;

  return (
    <Container>
      <IconRecoveryAccount src={recoveryAccountIcon} />
      <Link onClick={() => changerStep(1)}>Esqueceu a senha?</Link>
    </Container>
  );
};
