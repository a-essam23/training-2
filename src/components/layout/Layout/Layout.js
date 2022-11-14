import React from "react";
import { Footer, Header, Navbar } from "../../../components";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
