import Registration from '../Pages/registration';
import Login from '../Pages/login';
import Requests from '../Pages/requests';
import { Route, Routes } from 'react-router-dom';
import Keys from '../Pages/keys';
import Profile from '../Pages/profile';
import Users from '../Pages/users';

export const useRoutes = () => {

    return (
      <Routes>
        <Route path="/users" element={<Users/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/keys" element={<Keys/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    )
  }
  
  export default useRoutes