import './App.css';
import Header from '../src/Components/Header/Header';
import Information from "./Components/Information/Information";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/MyWorks/Work";

function App() {
    return (
        <div className="App">
            <Header/>
            <Information/>
            <Skills/>
            <Work/>
        </div>
    );
}

export default App;
