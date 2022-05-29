import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./Footer/Footer";
import Home from './Home/Home';
import Navigation from "./NavigationBar/Navigation";


function App() {
  return (
    <div className="App">
    <Navigation></Navigation>
     <Routes>
       <Route path='/' element={<Home />}></Route>
     </Routes>
       
     <br /> <br />
     <Footer></Footer>
    </div>
  );
}

export default App;
