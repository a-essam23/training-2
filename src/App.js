import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog } from "./context";
import { MainLayout } from "./layouts";
import { Homepage, BlogArticlePage, GenrePage, CategoryPage } from "./pages";

export default function App() {
    const [articleId, setArticleId] = useState();

    const articleOpenHandler = (id) => {
        setArticleId(id);
    };

    return (
        <BrowserRouter>
            <Blog.Provider value={{ id: articleId }}>
                <MainLayout>
                    <Routes>
                        <Route path="/">
                            <Route
                                index
                                element={<Homepage onArticleOpen={articleOpenHandler} />}
                            />
                            <Route path="Genre">
                                <Route index element={<GenrePage />} />
                                <Route path=":genre">
                                    <Route index element={<CategoryPage />} />
                                    <Route path=":article" element={<BlogArticlePage />} />
                                </Route>
                            </Route>
                        </Route>
                    </Routes>
                </MainLayout>
            </Blog.Provider>
        </BrowserRouter>
    );
}
