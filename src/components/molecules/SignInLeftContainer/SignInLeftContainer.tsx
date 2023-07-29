import {ICONS} from '../../../assets';
import {Container} from './style';

const BuildingHome = ICONS['building-home'];
const Logo = ICONS['logo-icon'];

export const SignInLeftContainer = () => {
  return (
    <Container>
      <img src={Logo} style={{width: '169px', height: '50px'}} />
      <img src={BuildingHome} style={{width: '614px', height: '467.851px'}} />
    </Container>
  );
};
