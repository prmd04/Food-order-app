import { useState } from "react";
import { LOGO } from "../util/constant";
import {Link} from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";
import { useSelector } from "react-redux";



const HeaderElement = () => {
  const [btnName , setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

   const cartItem = useSelector((store)=>store.cart.items);
  return (
    <header className="flex justify-between items-center bg-orange-100">
      <div className="w-36 bg-orange-100">
        <img src = {LOGO} />
      </div>
      {/* <div className="search-bar">
        <input></input>
      </div>
      <button className="btn">Search</button> */}
      <div className="nav-bar">
        <nav>
          <ul className="flex ">
            <li className="mx-4 text-lg ">
              OnlineStatus{onlineStatus?"💚":"💔"}
            </li>

            <li className="mx-4 text-lg">
              <Link to="/">Home</Link>
            </li >
            <li className="mx-4 text-lg">
              <Link to="/Contact">Contact us</Link>
            </li>
            <li className="mx-4 text-lg">
              <Link to="/About">About us</Link>
            </li>
            <li className="mx-4 text-lg">
              <Link to="/Grocery">Grocery</Link>
            </li>
            <li className="mx-4 text-lg ">
              <Link to="/Cart" className="w-8 font-semibold">Cart {cartItem.length}</Link>
            </li>
            <button className="mx-4 btn-primary" onClick={()=>{
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login")
              
            }}>{btnName}</button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderElement;
