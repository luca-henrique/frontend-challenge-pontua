import {useContext} from 'react';
import {StepContextType} from '../../../@types/step';
import {UserStepContext} from '../../../context/UserStepsContextProvider';
import {Container, ContainerForm, Title, Paragraphy} from './style';
import {Button} from '../../atoms/Button/Button';

export const RecoveryAccountConfirmation = () => {
  const {changerStep} = useContext(UserStepContext) as StepContextType;

  return (
    <Container>
      <ContainerForm>
        <Title>
          Tudo certo<label>;)</label>
        </Title>
        <div style={{height: '1.75rem'}} />
        <Paragraphy>
          Foi enviado um e-mail para você com instruções de como redefinir a sua
          senha.
        </Paragraphy>
        <div style={{height: '1.63rem'}} />
        <Button type='button' onClick={() => changerStep(0)}>
          voltar para o login
        </Button>
      </ContainerForm>
    </Container>
  );
};
