import Header from "./header";
import Footer from "./footer"

export default function ContentWrap(props) {
    const headerloggedLinks = ["About Us", "Contact", "Profile", "Cart", "Logout"];
    const section = "home"

    return (
      <div className="content">
        <Header links={headerloggedLinks} section={section}  ></Header>
        {props.children}
        <Footer></Footer>
      </div>
    );
  }