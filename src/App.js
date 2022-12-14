import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    HomePage,
    AboutPage,
    ContactPage,
    CategoryPage,
    GenrePage,
    BlogArticlePage,
} from "./pages";
import { MainLayout } from "./layouts";

export default function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/About" element={<AboutPage />} />
                    <Route path="/Contact" element={<ContactPage />} />
                    <Route path="/Genre" element={<CategoryPage />} />
                    <Route path="/Genre/:genre" element={<GenrePage />} />
                    <Route path="/Genre/:genre/:blogArticle" element={<BlogArticlePage />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}
