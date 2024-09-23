import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./index.css";
import { ToastContainer } from 'react-toastify';
function App() {
    return (
        <div className="w-screen bg-main-bg bg-cover bg-repeat-y min-h-screen">
            <ToastContainer/>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default App;
