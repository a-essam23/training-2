import { BlogArticleHeader, BlogArticleFooter } from "../../components";
import "./BlogArticle.css";

export default function BlogArticle({
    content: { genre, heading, date, photo, teaser, comments = [] },
}) {
    return (
        <article className="article">
            <BlogArticleHeader genre={genre} heading={heading} date={date} comments={comments} />
            <figure>
                <img className="article__img" src={photo} alt="Article" />
                <figcaption className="article__teaser">{teaser}</figcaption>
            </figure>
            <BlogArticleFooter genre={genre} heading={heading} />
        </article>
    );
}
