import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import AboutPage from './Pages/AboutPage';
// import Homepage from './Pages/Homepage';


function App() {
  return (
    <>
      <NavBar />
      <div className='maincontainer'>
        {/* <Homepage /> */}
        <AboutPage />
      </div>
      <Footer />
    </>
  );
}

export default App;
