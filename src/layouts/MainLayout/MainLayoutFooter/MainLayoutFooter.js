import MainLayoutFooterTop from "./MainLayoutFooterTop/MainLayoutFooterTop";
import MainLayoutFooterBottom from "./MainLayoutFooterBottom/MainLayoutFooterBottom";

export default function MainLayoutFooter() {
    return (
        <footer className="page__footer">
            <MainLayoutFooterTop />
            <hr />
            <MainLayoutFooterBottom />
        </footer>
    );
}
