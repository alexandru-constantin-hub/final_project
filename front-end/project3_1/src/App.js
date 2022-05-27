import './App.css';
import Provinces from './components/Provinces';
import ProvincesDrop from './components/ProvincesDrop';
import Header from './components/Header';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Provinces />
        <ProvincesDrop />
        <Dropdown />
        <Footer />
      </div>
      

    </div>
  );
}

export default App;
