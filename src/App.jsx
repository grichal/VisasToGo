import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./nav/nav";
import FirsSection from "./firstSection/firstSection";
import Services from "./services/services";
import Footer from "./footer/footer";
import ContactUs from "./contactUs/contactUs";
import SocialMedia from "./socialMedia/socialMedia";

const App = ()=>{
  
  return(<>
  <Nav/>
    <FirsSection/>
    <Services/>
    <ContactUs/>
    <SocialMedia/>
    <Footer/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element=''></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App