import {ICONS} from '../../../assets';
import {Container} from './style';

const signInIcon = ICONS['sign-in-icon'];

export const Button = ({children, type = 'button'}) => {
  return (
    <Container type={type}>
      {children}
      <img src={signInIcon} style={{height: '13px', width: '13px'}} />
    </Container>
  );
};
