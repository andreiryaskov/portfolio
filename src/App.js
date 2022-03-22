import './App.css';
import Menu from './Components/Header/Menu';
import Information from "./Components/Information/Information";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/MyWorks/Work";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import React, {useState} from "react";
import Nav from "./Components/Hamburger/Nav";

function App() {

    const [menuActive, setMenuActive] = useState(false)

    const items = [
        {value: 'Info', href: '/information'},
        {value: 'Skills', href: '/skills'},
        {value: 'Projects', href: '/proj'},
        {value: 'Write me', href: '/write'}
    ]

    const isActive = (e) => {
        setMenuActive(!menuActive)
    }

    return (
        <div className="App">
            <Nav isActive={isActive}/>
            <Information/>
            <Skills/>
            <Work/>
            <ContactForm/>
            <Footer/>
            <Menu items={items} active={menuActive}/>
        </div>

    );
}

export default App;
