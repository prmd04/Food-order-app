import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import HeaderElement from "./components/Header";
import BodyElement from "./components/Body"
import Cart from "./components/Cart";
import AboutUs from "./components/About";
import ContactUs from "./components/Contact";
import ShowError from "./components/Error";
import InfoAboutRes from "./components/Restaurant";
import { createBrowserRouter , RouterProvider ,Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./util/appStore";
// import Grocery from "./components/Grocery";


 const Grocery = lazy(()=> import("./components/Grocery"));

 const AppLayout = () => {
  return (
    <Provider store = {appStore}>
    <div className="big-container">
      <HeaderElement />
      <Outlet/>
    </div>
    </Provider>
  );
};


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<BodyElement/>
      },
      {
        path:"/about",
        element:<AboutUs/>
      },
      {
        path:"/contact",
        element:<ContactUs/>
      },
      {
        path: "/grocery",
        element:(<Suspense fallback={<h1>Loading...</h1>}><Grocery/>
        </Suspense>)
      },
      {
        path: "/cart",
        element:<Cart/>
      },
      
      {
        path:"/restaurant/:resid",
        element:<InfoAboutRes/>
      }
    ],
    errorElement:<ShowError/>
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

export default AppLayout;
