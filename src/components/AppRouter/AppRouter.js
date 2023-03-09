import React from 'react'
import { Route, Routes } from 'react-router-dom'


import  CreateAccountPage from '../../pages/CreateAccountPage/CreateAccountPage';

const AppRouter = () => {
  return (
          <div>
              <Routes>
                <Route path="/" element={<CreateAccountPage />} />
                
              </Routes>
          </div>
     );
 };



export default AppRouter ();