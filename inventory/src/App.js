import React from 'react';
import Login from './Login';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import AdminPanel from './AdminPanel';

function App() {
  return (
    <BrowserRouter ref={React.createRef()}>
       <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
