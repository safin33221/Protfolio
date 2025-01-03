import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";


const MainLayout = () => {
    return (
        <div>
            <nav className="">
                <Navbar/>
            </nav>
            <main className="">
                <Outlet/>
            </main>
        </div>
    );
};

export default MainLayout;