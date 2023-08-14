import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import OurTeam from './pages/OurTeam/OurTeam';
import RecentBlogs from './pages/RecentBlogs/RecentBlogs';
import Services from './pages/Services/Services';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import './scss/app.scss';





function App() {
  return (
    <div className="wrapper">
      <Navbar />
      {/* <Home /> */}
      {/* <AboutUs /> */}
      {/* <ContactUs /> */}
      {/* <OurTeam /> */}
      {/* <RecentBlogs /> */}
      {/* <Services /> */}
      <NotFound />
      <Footer />
    </div>
  );
}

export default App;
