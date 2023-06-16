import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Achieve from './Pages/Achieve/Achieve';
import Popular from './Pages/Popular/Popular';
import BasicTabs from './Components/Subnav/Subnav';
import Categories from './Pages/Categories/Categories';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <BasicTabs/>
        <Routes>
          <Route exact path="/" element={<Categories />} />
          <Route path="/popularposts" element={<Popular />} />
          <Route path="/achieve" element={<Achieve />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
