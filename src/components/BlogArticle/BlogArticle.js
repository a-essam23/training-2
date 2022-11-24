import { BlogArticleHeader, BlogArticleFooter } from "../../components";
import "./BlogArticle.css";

export default function BlogArticle({
    content: { id, cat, heading, date, teaser, comments = [], photo },
    onArticlePageOpen,
}) {
    const articleOpenHandler = () => {
        onArticlePageOpen(id);
    };
    return (
        <figure className="blog-article">
            <BlogArticleHeader cat={cat} heading={heading} date={date} comments={comments} />
            <img src={`./img/${photo}`} alt="Random Photo" loading={"lazy"} />
            <figcaption>{teaser}</figcaption>
            <BlogArticleFooter onArticleOpen={articleOpenHandler} />
        </figure>
    );
}
