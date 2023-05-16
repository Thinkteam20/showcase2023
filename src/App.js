import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./common/NavBar";

function App() {
    return (
        <div className='App'>
            <Outlet />
        </div>
    );
}

export default App;
