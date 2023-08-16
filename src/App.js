import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import OurTeam from './pages/OurTeam/OurTeam';
import RecentBlogs from './pages/RecentBlogs/RecentBlogs';
import Services from './pages/Services/Services';
import NotFound from './pages/NotFound/NotFound';
import FullBlog from './pages/FullBlog/FullBlog';
import FullProduct from './pages/FullProduct/FullProduct';
import Footer from './components/Footer/Footer';
import './scss/app.scss';







function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Home />
      {/* <AboutUs /> */}
      {/* <ContactUs /> */}
      {/* <OurTeam /> */}
      {/* <RecentBlogs /> */}
      {/* <Services /> */}
      {/* <NotFound /> */}
      {/* <FullBlog /> */}
      {/* <FullProduct /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
