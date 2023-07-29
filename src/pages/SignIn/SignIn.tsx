import {SignInForm} from '../../components/molecules/SignInForm/SignInForm';
import {SignInLeftContainer} from '../../components/molecules/SignInLeftContainer/SignInLeftContainer';
import {Container} from './style';

export const SignIn = () => {
  return (
    <Container>
      <SignInLeftContainer />

      <SignInForm />
    </Container>
  );
};
