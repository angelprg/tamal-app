import "./App.css";
import {Route, Routes} from 'react-router-dom'
import Atoles from './Components/Atoles/Atoles';
import Tamales from './Components/Tamales/Tamales';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/tamales" element={<Tamales />} />
          <Route path="/atoles" element={<Atoles />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
