import { useState } from "react";
import { Homepage, BlogArticlePage } from "./pages";

export default function App() {
    const [articleId, serArticleId] = useState(0);

    const articleOpenHandler = (articleID) => {
        serArticleId(articleID);
    };

    const exitHandler = () => {
        serArticleId(0);
    };

    return articleId > 0 ? (
        <BlogArticlePage articleID={articleId} onExit={exitHandler} />
    ) : (
        <Homepage onArticleOpen={articleOpenHandler} />
    );
}
