import logo from './Logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import PrimaryBtn from './Components/PrimaryBtn';
import SecondaryBtn from './Components/SecondaryBtn';
import Testimonial from './Components/Testimonial';

function App() {
  return (
    <>
      <NavBar />
      <div className='maincontainer'>
        <Testimonial />
      </div>
      <Footer />
    </>
  );
}

export default App;
