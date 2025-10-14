import './App.css';
import {Route, Routes} from "react-router-dom";
import { Topbar } from './components/Topbar';
import "./styles/default.css";
import { Home } from './components/Home';




function App() {
  return (
    <div className="App">
      <Topbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
        {/* <Routes>
          <Route path='/' element={<Topbar/>} />
          <Route path='/' element={<Header/>} />
        </Routes> */}
        
    </div>
  );
}

export default App;
