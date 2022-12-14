import { BlogArticle, Slider } from "../../components";
import { blogArticles } from "../../assets/data";
import "./HomePage.css";

export default function HomePage() {
    window.scrollTo(0, 0);
    return (
        <main className="home__page">
            <header className="home__header">
                <Slider kind="main" />
            </header>
            <section className="articles__section">
                {blogArticles.map((article) => (
                    <BlogArticle key={article.heading} content={article} />
                ))}
            </section>
        </main>
    );
}
