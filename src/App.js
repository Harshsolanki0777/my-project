  import logo from './logo.svg';
  import './App.css';
  import Loginpage from './login/index.jsx';
  import Registerpage from './register/index.jsx';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />}> </Route>
          <Route path="/register" element={<Registerpage />}> </Route>
        </Routes>
       
      </BrowserRouter>

    )
  }

  export default App;
