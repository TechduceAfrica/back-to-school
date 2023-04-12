import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Homepage from './Pages/Homepage';


function App() {
  return (
    <>
      <NavBar />
      <div className='maincontainer'>
        <Homepage />
      </div>
      <Footer />
    </>
  );
}

export default App;
