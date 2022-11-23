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
