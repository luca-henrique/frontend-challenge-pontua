import {Routes, Route} from 'react-router-dom';

import {Dashboard, SignIn} from '../pages/';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
};
