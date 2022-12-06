import { blogArticles } from "../../assets/data";
import { BlogArticle, Slider } from "../../components";

export default function Homepage({ onArticleOpen }) {
    const articleOpenHandler = (id) => {
        onArticleOpen(id);
    };

    return (
        <main className="home-page">
            <header>
                <Slider />
            </header>
            <section>
                {blogArticles.map((element) => (
                    <BlogArticle
                        key={element.id}
                        content={element}
                        onArticleOpen={articleOpenHandler}
                    />
                ))}
            </section>
        </main>
    );
}
