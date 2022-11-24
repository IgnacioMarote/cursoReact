import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
  return(
    <div>
      <NavBar />
      <Header />
      <ItemListContainer greeting={"Tu joyeria de confianza!"}/>
      <Footer />
    </div>
  )
}
export default App;