import Header from "./components/header";
import Content from "./components/content";

function App() {
    const headerloggedLinks = ["About Us", "Contact", "Profile", "Cart", "Logout"];
    const section = "home"

  return (
    <>
    <Header links={headerloggedLinks} section={section}  ></Header>
    <Content></Content>
    </>
    
  );
}

export default App;