import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../layouts";

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
