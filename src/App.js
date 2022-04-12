import logo from './logo.svg';
import './App.css';
import Mybutton from './component/Mybutton';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ravindra Ditama 
        </p>
        <Mybutton/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
