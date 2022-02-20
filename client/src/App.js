import { Route, Routes } from 'react-router';
import './App.css';
import Admin from './component/Admin';
import Home from './component/Home';
import Login from './component/Login/Login';
import NavList from './component/NavList';
import PrivateRoute from './component/privateRoute';
import Profile from './component/Profile';
import SginUp from './component/sginup/SginUp';

function App() {
  return (
    <div className="App">
<NavList></NavList>

<Routes>
  {/* <Route path='/admin'element={<Admin></Admin>}/> */}
  <Route path='/' element={<Home></Home>}   />
 <Route path='/Sginup' element={ <SginUp></SginUp>}/>
 <Route path='/login' element={ <Login></Login>}/>
 <Route path='/profile' element=
 {<PrivateRoute><Profile> </Profile></PrivateRoute> }> </Route>
  </Routes>
    </div>
  );
}

export default App;
