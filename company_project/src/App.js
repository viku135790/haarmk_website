import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './root-folder/pages/AboutUs';
import CareerPage from "./root-folder/pages/CareerPage";
import ContactUs from './root-folder/pages/ContactUs';
import Home from './root-folder/pages/Home';
import Login from './root-folder/pages/Login';
import PortFolio from './root-folder/pages/PortFolio';
import Services from "./root-folder/pages/Services";
import SignUp from './root-folder/pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/PortFolio' element={<PortFolio />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/CareerPage' element={<CareerPage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
