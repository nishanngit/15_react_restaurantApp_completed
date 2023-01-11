import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Restaurentlist from './components/Restaurentlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Viewrestaurant from './components/Viewrestaurant';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
    <Header/>
  {/*   <h3>Restaurent Application</h3> */}
  <Routes> 
    <Route path='/' element={<Restaurentlist/>}/>
    <Route path='/viewrestaurant/:id' element={<Viewrestaurant/>}/>
    </Routes> 
    <Footer />
      </header>
      </Router>
    </div>
  );
}

export default App;
