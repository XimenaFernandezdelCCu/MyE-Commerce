import Header from "./header";
import Footer from "./footer"
import { Outlet } from "react-router-dom";

export default function ContentWrap(props) {
    const headerloggedLinks = ["About Us", "Contact", "Profile", "Cart", "Logout"];
    const section = "home"

    return (
      <>
      {/* <div className="content"> */}
        <Header links={headerloggedLinks} section={section}  ></Header>
        {/* {props.children} */}
        <Outlet/>
        <Footer></Footer>
      {/* </div> */}
      </>
    );
  }