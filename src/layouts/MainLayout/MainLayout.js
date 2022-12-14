import MainLayoutHeader from "./MainLayoutHeader/MainLayoutHeader";
import MainLayoutFooter from "./MainLayoutFooter/MainLayoutFooter";

export default function MainLayout({ children }) {
    return (
        <>
            <MainLayoutHeader />
            <hr />
            {children}
            <hr />
            <MainLayoutFooter />
        </>
    );
}
