import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import AboutPage from './Pages/AboutPage';
import Homepage from './Pages/Homepage';
import { BrowserRouter,
          Routes,
          Route,
 } from 'react-router-dom';
import WhatWeDoPage from './Pages/WhatWeDoPage';
import ContactPage from './Pages/ContactPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='maincontainer'>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/ourstory' element={<AboutPage />} />
            <Route exact path='/whatwedo' element={<WhatWeDoPage />} />
            <Route exact path='/contactus' element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
