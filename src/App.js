import './App.css'
import {Route, Routes} from "react-router";
import {MainPage} from "./components/MainPage/MainPage";
import {NotePage} from "./components/NotePage/NotePage";


function App() {

    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/notes/:id' element={<NotePage/>}/>
            <Route path='*' element={<div> page wasn't found :(</div>}/>
        </Routes>

    );
}

export default App;
