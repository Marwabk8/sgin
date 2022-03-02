import { Route, Routes } from 'react-router';
import './App.css';
import Home from './component/Home';
import Login from './component/Login/Login';
import NavList from './component/NavList';
import PostForm from './component/postForm';

import PrivateRoute from './component/privateRoute';
import Profile from './component/Profile';
import AddEditProduct from './component/sginup/admin/AddEditProduct';
import AddEditStore from './component/sginup/admin/AddEditStore';
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
  <Route path ='/addEditProduct' element={<AddEditProduct/>}/>
 <Route path ='/addEdit' element={<AddEditStore/>}/>
 <Route path ='/postProduct' element={<PostForm/>}/>

  </Routes>
    </div>
  );
}

export default App;
