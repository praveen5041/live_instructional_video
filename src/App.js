import './App.css';
import Home from './components/pages/Home';
import {  BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './components/pages/Navbar';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import StreamPlayer from './components/pages/StreamPlayer';
function App() {
  return (
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/meet' element={<StreamPlayer/>}/>
       </Routes>
       </BrowserRouter>
      
         
  );
}

export default App;
