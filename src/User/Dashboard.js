import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

const Dashboard = () => {
  const [user] = useAuthState(getAuth());
  const [accessLevel, setAccessLevel] = useState("");

  fetch(
    `https://hidden-ravine-16154.herokuapp.com/myProfile/${user.email}`
  )
    .then((res) => res.json())
    .then((data) => {
      setAccessLevel(data.access);
    });
  return (
    <div>
      <div class="drawer">
        {/* <input id="my-drawer" type="checkbox" class="drawer-toggle" /> */}
        <div class="drawer-content">
          {/* <!-- Page content here --> */}
          {/* <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label> */}
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to='/dashboard'>My Profile</Link>
            </li>
            <>
              {accessLevel === "Admin" ? (
                <div>
                  <li>
                    <Link to='/dashboard/addproduct'>Add Product</Link>
                  </li>
                  <li>
                    <Link to='/dashboard/makeadmin'>Make Admin</Link>
                  </li>
                  <li>
                    <Link to='/dashboard/manageorder'>Manage Order</Link>
                  </li>
                  <li>
                    <Link to='/dashboard/manageproducts'>Manage Products</Link>
                  </li>
                </div>
              ) : (
                <div>
                  <li>
                    <Link to='/dashboard/addNewReview'>Add Reviews</Link>
                  </li>
                  <li>
                    <Link to='/dashboard/myorder'>My Orders</Link>
                  </li>
                </div>
              )}
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
