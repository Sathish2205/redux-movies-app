import Navbar from './components/Navbar/index.jsx';
import Home from './pages/home/index.js';
import {Routes,Route} from "react-router-dom"
import './App.css';

function App() {
  return (
<Routes>
  <Route path='/' element={ <Home/>}/>


</Routes>


  );
}

export default App;
