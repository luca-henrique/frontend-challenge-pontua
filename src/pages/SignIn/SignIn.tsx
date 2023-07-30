import {ICONS} from '../../assets';
import {UserSteps} from '../../components/organisms/UserSteps/UserSteps';
import UserStepsContextProvider from '../../context/UserStepsContextProvider';
import {Container} from './style';

export const SignIn = () => {
  const Logo = ICONS['logo-icon'];
  const BuildingHome = ICONS['building-home'];

  return (
    <Container>
      <div
        style={{paddingLeft: '106px', paddingTop: '49px', marginBottom: '40px'}}
      >
        <img
          src={Logo}
          style={{width: '169px', height: '50px'}}
          loading='lazy'
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}
      >
        <img
          src={BuildingHome}
          style={{width: '612px', height: '458px'}}
          loading='lazy'
        />
        <UserStepsContextProvider>
          <UserSteps />
        </UserStepsContextProvider>
      </div>
    </Container>
  );
};

export const UserStepsContext = () => {
  return (
    <UserStepsContextProvider>
      <UserSteps />
    </UserStepsContextProvider>
  );
};
