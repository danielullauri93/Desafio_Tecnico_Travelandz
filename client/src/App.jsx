import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home/Home";
// import Navbar from "./components/navbar/Navbar"
import "./App.css";

// const Layout = () => {
//   return (
//     <>
//       <Navbar />
//     </>
//   );
// };

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/post/:id",
      //   element: <Single />,
      // },
      // {
      //   path: "/write",
      //   element: <Write />,
      // },
    ],
  },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);
function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
