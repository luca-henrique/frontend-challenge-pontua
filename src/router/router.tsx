import {Routes, Route} from 'react-router-dom';

/*
  - Example router
  -- https://github.com/remix-run/react-router/blob/dev/examples/basic/src/App.tsx
*/

import {Dashboard, SignIn, RecoveryAccount} from '../pages/';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='recovery-account' element={<RecoveryAccount />} />
      </Routes>
    </>
  );
};
