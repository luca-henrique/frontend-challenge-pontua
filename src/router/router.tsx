import {Routes, Route} from 'react-router-dom';
import {Dashboard, SignIn, Home, Profile} from '../pages/';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn />} />

        <Route element={<Dashboard />}>
          <Route path='/dashboard' element={<Home />} />
          <Route path='/perfil' element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};
