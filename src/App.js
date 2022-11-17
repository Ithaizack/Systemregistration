import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import LoginRegister from './Pages/LoginRegistration/LoginRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginRegister/>} />
        <Route path='/Home' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
