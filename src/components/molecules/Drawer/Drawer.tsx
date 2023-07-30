import {Link} from 'react-router-dom';
import {ICONS} from '../../../assets';
import {Container, Header, ItemList, List} from './style';

const Logo = ICONS['logo-dashboard-icon'];

const homeIcon = ICONS['home-icon'];
const profileIcon = ICONS['profile-icon'];
const logountIcon = ICONS['logout-icon'];

export const Drawer = () => {
  return (
    <Container>
      <Header>
        <img
          src={Logo}
          style={{width: '104px', height: '26px', paddingLeft: '26px'}}
        />
      </Header>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <List>
          <LinkListItem to='/' name='Home' />
          <ItemList>
            <img
              src={profileIcon}
              style={{width: '20px', height: '20px', marginRight: '14px'}}
            />
            Perfil
          </ItemList>
        </List>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <List>
          <ItemList>
            <img
              src={logountIcon}
              style={{width: '20px', height: '20px', marginRight: '14px'}}
            />
            Sair
          </ItemList>
        </List>
      </div>
    </Container>
  );
};

export const LinkListItem = ({to = '', name = 'Link'}) => {
  return (
    <Link to={to}>
      <ItemList>
        <img
          src={homeIcon}
          style={{width: '20px', height: '20px', marginRight: '14px'}}
        />
        {name}
      </ItemList>
    </Link>
  );
};
