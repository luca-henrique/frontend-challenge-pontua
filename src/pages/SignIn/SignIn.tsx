import {ICONS} from '../../assets';
import {UserSteps} from '../../components/organisms/UserSteps/UserSteps';
import UserStepsContextProvider from '../../context/UserStepsContextProvider';
import {Container} from './style';

import {Icon} from '../../components';

export const SignIn = () => {
  return (
    <Container>
      <header
        style={{paddingLeft: '106px', paddingTop: '49px', marginBottom: '40px'}}
      >
        <Icon width='169px' height='50px' />
      </header>
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}
      >
        <Icon name='build-home' width='611px' height='458px' />
        <UserStepsContextProvider>
          <UserSteps />
        </UserStepsContextProvider>
      </section>
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
