import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Home/Home';
import Navigation from "./NavigationBar/Navigation";


function App() {
  return (
    <div className="App">
    <Navigation></Navigation>
     <Routes>
       <Route path='/' element={<Home />}></Route>
     </Routes>
       
     
    </div>
  );
}

export default App;
