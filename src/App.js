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

    const menuItems = [
        {value: 'Info', href: '/information'},
        {value: 'Skills', href: '/skills'},
        {value: 'Projects', href: '/proj'},
        {value: 'Write me', href: '/write'}
    ]

    const infoDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur cum doloribus id illum incidunt ipsam minima molestiae nemo optio praesentium quibusdam temporibus, veniam! Aperiam assumenda earum esse modi recusandae!'

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
                <Information infoDescription={infoDescription}/>
                <Skills/>
                <Work/>
                <ContactForm/>
                <Footer/>
                {/*<Menu menuItems={menuItems} active={menuActive}/>*/}
            </div>
            <div className='container'>
                <Menu menuItems={menuItems} active={menuActive}/>
            </div>
        </div>


    );
}

export default App;
