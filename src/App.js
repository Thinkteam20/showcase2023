import { useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='App'>
            <Outlet />
        </div>
    );
}

export default App;
