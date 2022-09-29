import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Content from './Pages/Content';
import Sale from './Pages/Sale';

function App() {
  return (
    <div className="App">
      <Sale/>
     <Navbar/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
