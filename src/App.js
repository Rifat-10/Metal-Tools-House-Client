import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./Footer/Footer";
import Home from './Home/Home';
import Navigation from "./NavigationBar/Navigation";
import Notfound from "./Notfound/Notfound";
import SignIn from "./Sign-In-Up/SignIn/SignIn";
import SignUp from "./Sign-In-Up/SignUp/SignUp";


function App() {
  return (
    <div className="App">
    <Navigation></Navigation>
     <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='*' element={<Notfound />}></Route>
       <Route path='login' element={<SignIn />}></Route>
       <Route path='signup' element={<SignUp />}></Route>
     </Routes>
       
     <br /> <br />
     <Footer></Footer>
    </div>
  );
}

export default App;
