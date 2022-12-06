import { BlogArticleHeader, BlogArticleFooter } from "../../components";
import "./BlogArticle.css";

export default function BlogArticle({
    content: { id, cat, heading, date, teaser, comments = [], photo },
    onArticleOpen,
}) {
    const articleOpenHandler = () => {
        onArticleOpen(id);
        window.scrollTo(0, 0);
    };

    return (
        <figure className="blog-article">
            <BlogArticleHeader cat={cat} heading={heading} date={date} comments={comments} />
            <img src={`./img/${photo}`} alt="Random Photo" loading={"lazy"} />
            <figcaption>{teaser}</figcaption>
            <BlogArticleFooter
                articleHeading={heading}
                articleCategory={cat}
                onArticleOpen={articleOpenHandler}
            />
        </figure>
    );
}
