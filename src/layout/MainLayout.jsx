import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar.jsx/Navbar";
const MainLayout = () => {
    return (
        <div className="roboto">
            <section className="">
                <Navbar></Navbar>
            </section>
            <section  className="min-h-[calc(100vh-220px)] pt-20">
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default MainLayout;