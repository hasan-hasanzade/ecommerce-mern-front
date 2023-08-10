import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
