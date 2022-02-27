import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Information from "./components/Information/Information";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Wait from "./components/Wait/Wait";
import Contacts from "./components/Contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className='section_information'>
                <Information/>
            </div>
            <div className='section_skills'>
                <Skills/>
            </div>
            <div className='section_projects'>
                <Projects/>
            </div>
            <div className="section_wait">
                <Wait/>
            </div>
            <div className="section_contacts">
                <Contacts/>
            </div>
            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    )
}

export default App
