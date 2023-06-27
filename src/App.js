
import './App.css';
import { Route, Routes,Link, Outlet } from 'react-router-dom';
import { Home } from './Layout';
import About from './compenents/about';
import { Home2 } from './compenents/home';
import Training from './compenents/Training';
import Contact from './compenents/contactUs';
import Courses from './compenents/courseContent';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}>
      <Route index  element={<Home2 />}/>
      <Route path='about' element={<About />}/>
      <Route path='training' element={<Training/>} />
      <Route path='contact' element={<Contact />} />
      <Route path='course' element={<Courses />} />
      </Route>
    </Routes>
    </>
  );

}

export default App;
