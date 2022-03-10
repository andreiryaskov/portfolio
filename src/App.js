import './App.css';
import Header from '../src/Components/Header/Header';
import Information from "./Components/Information/Information";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/MyWorks/Work";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            {/*<Header/>*/}
            <Information/>
            <Skills/>
            <Work/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default App;
