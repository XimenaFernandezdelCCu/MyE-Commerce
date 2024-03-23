import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer"
import "./style/generalStyle.css"

function App() {
    const headerloggedLinks = ["About Us", "Contact", "Profile", "Cart", "Logout"];
    const section = "home"

  return (
    <>
    <Header links={headerloggedLinks} section={section}  ></Header>
    <Content></Content>
    <Footer></Footer>
    </>
    
  );
}

export default App;