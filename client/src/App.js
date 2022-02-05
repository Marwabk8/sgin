import { Route, Routes } from 'react-router';
import './App.css';
import Login from './component/Login/Login';
import NavList from './component/NavList';
import SginUp from './component/sginup/SginUp';

function App() {
  return (
    <div className="App">
<NavList></NavList>
<Routes>
 <Route path='/Sginup' element={ <SginUp></SginUp>}/>
 <Route path='/login' element={ <Login></Login>}/>
  </Routes>
    </div>
  );
}

export default App;
