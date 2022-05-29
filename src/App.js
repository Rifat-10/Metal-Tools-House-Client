import { Route, Routes } from "react-router-dom";
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify"
import Footer from "./Footer/Footer";
import Home from './Home/Home';
import Navigation from "./NavigationBar/Navigation";
import Notfound from "./Notfound/Notfound";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Purchase from "./PurchasePage/Purchase";
import SignIn from "./Sign-In-Up/SignIn/SignIn";
import SignUp from "./Sign-In-Up/SignUp/SignUp";
import Dashboard from "./User/Dashboard";
import RequiredAdmin from "./PrivateRoute/RequireAdmin/RequireAdmin";
import MakeAdmin from "./User/MakeAdmin/MakeAdmin";
import AddProduct from "./User/AddProduct/AddProduct";
import ManageOrder from "./User/ManageOrder/ManageOrder";
import ManageProducts from "./User/ManageProducts/ManageProducts";
import MyProfile from "./User/MyProfile/MyProfile";
import AddNewReview from "./Review/AddNewReview/AddNewReview";
import MyOrders from "./User/MyOrders/MyOrders";
// import Payment from "./User/MyOrders/Payment";


function App() {
  return (
    <div className="App">
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
            <PrivateRoute>
              <Dashboard />
              </PrivateRoute>
          }
        >
          <Route index element={<MyProfile />}></Route>
          <Route path='/dashboard/addreviews' element={<AddNewReview />}></Route>
          <Route path='/dashboard/myorder' element={<MyOrders />}></Route>
          {/* <Route path='/dashboard/payment/:id' element={<Payment />}></Route> */}
          <Route
            path='/dashboard/addproduct'
            element={
              <RequiredAdmin>
                <AddProduct />
              </RequiredAdmin>
            }
          ></Route>
          <Route
            path='/dashboard/makeadmin'
            element={
              <RequiredAdmin>
                <MakeAdmin />
              </RequiredAdmin>
            }
          ></Route>
          <Route
            path='/dashboard/manageorder'
            element={
              <RequiredAdmin>
                <ManageOrder />
              </RequiredAdmin>
            }
          ></Route>
          <Route
            path='/dashboard/manageproducts'
            element={
              <RequiredAdmin>
                <ManageProducts />
              </RequiredAdmin>
            }
          ></Route>
        </Route>
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
