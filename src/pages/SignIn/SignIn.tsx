import {Icon, HeaderLogoSignIn, UserSteps} from '@/components';
import {UserStepsContextProvider} from '@/context/';

import {Container, Section} from './style';

export const SignIn = () => {
  return (
    <Container>
      <HeaderLogoSignIn />
      <Section>
        <Icon name='build-home' width='611px' height='458px' />
        <UserStepsContextProvider>
          <UserSteps />
        </UserStepsContextProvider>
      </Section>
    </Container>
  );
};
