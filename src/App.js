import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Testimonial from './Components/Testimonial';

import WhatWeDoSubGroup from './Components/WhatWeDoSubGroup';

function App() {
  return (
    <>
      <NavBar />
      <div className='maincontainer'>
        <WhatWeDoSubGroup />
        
        <Testimonial />
      </div>
      <Footer />
    </>
  );
}

export default App;
