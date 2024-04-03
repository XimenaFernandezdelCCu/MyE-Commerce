import { Outlet } from "react-router-dom";
// Components
import Header from "./header";
import Footer from "./footer"

export default function ContentWrap() {
    const headerloggedLinks = ["About Us", "Contact", "Profile", "Cart", "Logout"];
    const section = "home"

    return (
      <>
        <Header links={headerloggedLinks} section={section}></Header>
        <Outlet/>
        <Footer></Footer>
      </>
    );
  }