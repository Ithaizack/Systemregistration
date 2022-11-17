import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import LoginRegister from './Pages/LoginRegistration/LoginRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Login' element={<LoginRegister/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
