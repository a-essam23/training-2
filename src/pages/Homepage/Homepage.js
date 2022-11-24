import { blogArticles } from "../../assets/data";
import { MainLayout } from "../../layouts";
import { BlogArticle, Slider } from "../../components";

export default function Homepage({ onArticleOpen }) {
    const articlePageOpenHandler = (articleID) => {
        onArticleOpen(articleID);
    };
    return (
        <MainLayout>
            <main className="home-page">
                <header>
                    <Slider />
                </header>
                <section>
                    {blogArticles.map((element) => (
                        <BlogArticle
                            key={element.id}
                            content={element}
                            onArticlePageOpen={articlePageOpenHandler}
                        />
                    ))}
                </section>
            </main>
        </MainLayout>
    );
}
