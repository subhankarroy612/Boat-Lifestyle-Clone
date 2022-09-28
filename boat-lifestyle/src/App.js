import './App.css';
import Navbar from './Components/Navbar';
import Content from './Pages/Content';
import Sale from './Pages/Sale';

function App() {
  return (
    <div className="App">
      <Sale/>
     <Navbar/>
     <Content/>
    </div>
  );
}

export default App;
