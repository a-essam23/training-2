import { useParams } from "react-router-dom";
import { BlogArticleHeader } from "../../components";
import { blogArticles } from "../../assets/data";
import "./BlogArticlePage.css";

export default function BlogArticlePage() {
    window.scrollTo(0, 0);

    const { blogArticle } = useParams();
    const article = blogArticles.find(
        (article) => article.heading === blogArticle.split("_").join(" ")
    );

    return (
        <main className="article__page">
            <BlogArticleHeader
                genre={article.genre}
                heading={article.heading}
                date={article.date}
                comments={article.comments}
            />
            <img src={article.photo} alt="Article" />
            <p className="article__body">{article.body}</p>
        </main>
    );
}
