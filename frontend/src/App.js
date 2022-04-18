import logo from './logo.svg';
import './App.css';
import MainElement from './Elements/MainElement';
import Location from './Elements/Location';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainElement/>} />
      <Route path='/location' element={<Location/>} />
    </Routes>
  );
}

export default App;
