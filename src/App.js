import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      {/* <Home /> */}
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
