import { useState } from "react";
import { Homepage, BlogArticlePage } from "./pages";
import { BlogProvider } from "./context/BlogProvider";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function App() {
    const [articleId, serArticleId] = useState(0);

    const articleOpenHandler = (articleID) => {
        serArticleId(articleID);
    };

    const exitHandler = () => {
        serArticleId(0);
    };

    return (
        <BlogProvider>
            <Router>
                <Routes>
                    <Route path={"/"} element={<Homepage />} />
                    <Route path="/:genre" element={<BlogArticlePage />} />
                    <Route
                        path="/:genre/:blogId"
                        element={<BlogArticlePage />}
                    />
                </Routes>
            </Router>
        </BlogProvider>
    );
    //     <BlogArticlePage articleID={articleId} onExit={exitHandler} />
    // ) : (

    // );
}
