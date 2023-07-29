import {ICONS} from '../../../assets';
import {Container, IconRecoveryAccount, Link} from './style';
const recoveryAccountIcon = ICONS['recovery-account-icon'];

export const RecoveryAccountLinkContainer = () => {
  return (
    <Container>
      <IconRecoveryAccount src={recoveryAccountIcon} />
      <Link>Esqueceu a senha?</Link>
    </Container>
  );
};
