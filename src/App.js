import { Route, Routes } from "react-router-dom";
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"
import Footer from "./Footer/Footer";
import Home from './Home/Home';
import Navigation from "./NavigationBar/Navigation";
import Notfound from "./Notfound/Notfound";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Purchase from "./PurchasePage/Purchase";
import SignIn from "./Sign-In-Up/SignIn/SignIn";
import SignUp from "./Sign-In-Up/SignUp/SignUp";
import MyOrders from "./User/MyOrders/MyOrders";
import Payment from "./User/MyOrders/Payment";
import AddNewReview from "./Review/AddNewReview/AddNewReview";
import Dashboard from "./User/Dashboard";
import MyPortfolio from "./MyPortfolio/MyPortfolio";
import Blogs from "./Blogs/Blogs";


function App() {
  return (
    <div className="App bg-gray-200">
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<Notfound />}></Route>

        <Route
          path='/purchase/:id'
          element={
            <PrivateRoute><Purchase /></PrivateRoute>
          }
        ></Route>
        <Route
          path='/dashboard'
          element={
            <PrivateRoute><Dashboard /></PrivateRoute>
          }
        >

          <Route path='/dashboard/myorder' element={<MyOrders />}></Route>
          <Route path='/dashboard/payment/:id' element={<Payment />}></Route>
        </Route>

        <Route
          path='addNewReview'
          element={
            <PrivateRoute><AddNewReview /></PrivateRoute>

          }
        ></Route>
        <Route path='myportfolio' element={<MyPortfolio />}></Route>
        <Route path='blog' element={<Blogs />}></Route>
        <Route path='login' element={<SignIn />}></Route>
        <Route path='signup' element={<SignUp />}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <br /> <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
