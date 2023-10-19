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
import GetInvolvedPage from './Pages/GetInvolvedPage';
import TeacherSupport from './Pages/TeacherSupport';
import SupplyDrive from './Pages/SupplyDrivePage';
import SponsorAChild from './Pages/SponsorAChild'

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
            <Route exact path='/getinvolved' element={<GetInvolvedPage />} />
            <Route exact path='/teacher-training-and-support' element={<TeacherSupport/>} />
            <Route exact path='/back-to-school-supply-drive' element={<SupplyDrive/>} />
            <Route exact path='/sponsor-a-child-campaign' element={<SponsorAChild/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
