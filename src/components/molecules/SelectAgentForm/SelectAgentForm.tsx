import {useNavigate} from 'react-router-dom';
import {Button} from '../../atoms/Button/Button';
import {Container, ContainerForm, Title, Paragraphy} from './style';
import {CustomSelect} from '../../atoms/CustomSelect/CustomSelect';

export const SelectAgentForm = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ContainerForm>
        <Title>
          Selecione o seu agente mais legal<label>.</label>
        </Title>
        <div style={{height: '2rem'}} />
        <Paragraphy>Tenha a visão completa do seu agente.</Paragraphy>
        <div style={{height: '0.60rem'}} />
        <CustomSelect />
        <div style={{height: '1rem'}} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <div style={{width: '100px'}}>
            <Button type='button' onClick={() => navigate('/dashboard')}>
              entrar
            </Button>
          </div>
        </div>
      </ContainerForm>
    </Container>
  );
};
