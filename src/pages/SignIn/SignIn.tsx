import {SignInLeftContainer} from '../../components/molecules/SignInLeftContainer/SignInLeftContainer';
import {UserSteps} from '../../components/organisms/UserSteps/UserSteps';
import UserStepsContextProvider from '../../context/UserStepsContextProvider';
import {Container} from './style';

export const SignIn = () => {
  return (
    <Container>
      <SignInLeftContainer />
      <UserStepsContextProvider>
        <UserSteps />
      </UserStepsContextProvider>
    </Container>
  );
};
