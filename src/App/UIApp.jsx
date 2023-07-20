import { RootLayout as Layout } from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from "../Pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" Component={Layout}>
    <Route index Component={Home} />
    <Route path="/about" Component={About} />
    <Route path="/contact" Component={Contact} />
  </Route>
  )
);

function UIApp() {
  return <RouterProvider router={router} />;
}

export default UIApp;
