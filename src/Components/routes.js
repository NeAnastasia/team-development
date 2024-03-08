import Registration from '../Pages/registration';
import Login from '../Pages/login';
import { Route, Routes } from 'react-router-dom';

export const useRoutes = () => {

    return (
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    )
  }
  
  export default useRoutes