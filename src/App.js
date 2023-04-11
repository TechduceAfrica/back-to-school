import logo from './Logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import PrimaryBtn from './Components/PrimaryBtn';
import SecondaryBtn from './Components/SecondaryBtn';

function App() {
  return (
    <>
      <NavBar />
      <div className='maincontainer'>
        <PrimaryBtn
          btnlink=""
          btntext="text" />

        <SecondaryBtn
          btnlink=""
          btntext="Secondarytext" />
      </div>
      <Footer />
    </>
  );
}

export default App;
