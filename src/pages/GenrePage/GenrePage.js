import { useParams } from "react-router-dom";
import { BlogArticle } from "../../components";
import { blogArticles } from "../../assets/data";
import "./GenrePage.css";

export default function GenrePage() {
    window.scrollTo(0, 0);

    const { genre } = useParams();
    const articles = [];
    blogArticles.forEach((article) => {
        if (article.genre === genre) articles.push(article);
    });

    return (
        <main className="genre__page">
            {articles.map((article) => (
                <BlogArticle key={article.heading} content={article} />
            ))}
        </main>
    );
}
