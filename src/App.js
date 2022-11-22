import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import LoginRegister from './Pages/LoginRegistration/LoginRegister';
import Create from './Pages/Create/Create';
import Views from './Pages/Views/Views';
import Settings from './Pages/Setting/Settings';
import Start from './Pages/LoginRegistration/inicio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/Login' element={<LoginRegister/>}/>
        <Route path='/Register' element={<></>}/>
        <Route path='/Home' element={<Home/>} />
        <Route path='/Home/Create' element={<Create/>} />
        <Route path='/Home/Views' element={<Views/>} />
        <Route path='/Home/Settings' element={<Settings/>} />
      </Routes>
    </Router>
  );
}

export default App;
