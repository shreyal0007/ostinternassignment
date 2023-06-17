import './App.css';
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import BasicTabs from './Components/Subnav/Subnav';


function App() {
  return (
    <div className="App">
     
        <Navbar />
        <BasicTabs/>
     
    </div>
  );
}

export default App;
