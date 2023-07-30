import {Outlet} from 'react-router-dom';
import {Drawer} from '../../components/molecules/Drawer/Drawer';

import {Header} from './style';

export const Dashboard = () => {
  return (
    <div style={{display: 'flex'}}>
      <Drawer />
      <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        <Header>
          <input placeholder='buscar' />
        </Header>
        <Outlet />
      </div>
    </div>
  );
};
