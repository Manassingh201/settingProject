
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./features/auth/Login";
import SignUp from "./features/auth/SignUp"
import UserForm from "./userform/UserForm";
import Post from "./features/post/Allcollection";
import Collections from "./features/post/Collections";
import Card from "./features/card/Card";
import LoginPage from "./pages/LoginPage";
import YourProfile from "./features/profile/YourProfile"
import Error from "./features/error/Error";
import VerifyOtp from "./features/auth/VerifyOtp"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path:'/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path:'/Signup',
    element:<SignUp></SignUp>,
  },
  {
    path:'/UserInput',
    element:<UserForm></UserForm>
  },
  {
    path:'/post',
    element:<Post></Post>
  },
  {
    path:'/card',
    element:<Card></Card>
  },
  {
    path:'/collection',
    element:<Collections></Collections>
  },
  {
    path:'/profile',
    element:<YourProfile></YourProfile>
  },
  {
    path:'/*',
    element:<Error></Error>
  },
  {
    path:'/verifyOtp/:id/:token',
    element:<VerifyOtp></VerifyOtp>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}


export default App;
