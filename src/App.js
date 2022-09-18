
import './App.css';
import Home from './Components/Home/Home';
import Navber from './Components/Navebar/Navber';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <div className="">
      <Navber />
      <Home />
    </div>
  );
}

export default App;
