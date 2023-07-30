import {Routes, Route} from 'react-router-dom';

import {Dashboard, SignIn} from '../pages/';
import {Home} from '../pages/Home/Home';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/entrar' element={<SignIn />} />
        <Route path='dashboard' element={<Dashboard />} />

        <Route element={<Dashboard />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
