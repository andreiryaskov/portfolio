import './App.css';
import Menu from './Components/Menu/Menu';
import Information from "./Components/Information/Information";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/MyWorks/Work";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import React, {useState} from "react";
import Nav from "./Components/Hamburger/Nav";
import ParticlesBackground from "./Components/ParticlesBackground/ParticlesBackground";

function App() {

    const [menuActive, setMenuActive] = useState(false)

    const isActive = (e) => {
        setMenuActive(!menuActive)
    }

    return (
        <div className='app__wrapper'>
            <div className='app__wrapper_burger container'>
                <Nav isActive={isActive}/>
            </div>
            <div className="App">
                <ParticlesBackground/>
                <Information/>
                <Skills/>
                <Work/>
                <ContactForm/>
                <Footer/>
            </div>
            <div className='container'>
                    <Menu active={menuActive}/>
            </div>
        </div>
    );
}

export default App;
