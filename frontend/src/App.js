import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Messaging from './components/Messaging';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      {useLocation().pathname === '/' && <Messaging />}
    </div>
  );
}

export default App;
