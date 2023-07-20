import { Outlet } from "react-router-dom";
import "../assets/styles/Layouts/_RootLayout.scss";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";

function RootLayout() {
  return (
    <div className="Layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export { RootLayout };
