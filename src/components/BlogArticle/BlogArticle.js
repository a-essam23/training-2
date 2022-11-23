import { BlogArticleHeader, BlogArticleFooter } from "../../components";
import "./BlogArticle.css";

export default function BlogArticle({ content: { cat, heading, date, teaser, comments = [], photo } }) {
    return (
        <figure className="blog-article">
            <BlogArticleHeader cat={cat} heading={heading} date={date} comments={comments} />
            <img src={`./img/${photo}`} alt="Random Photo" loading={"lazy"} />
            <figcaption>{teaser}</figcaption>
            <BlogArticleFooter />
        </figure>
    );
}
