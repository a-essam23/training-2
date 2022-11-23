import { blogArticles } from "../../assets/data";
import { MainLayout } from "../../layouts";
import { BlogArticle } from "../../components";

export default function Homepage() {
    return (
        <MainLayout>
            <main>
                <section>
                    {blogArticles.map((element) => (
                        <BlogArticle key={element.id} content={element} />
                    ))}
                </section>
            </main>
        </MainLayout>
    );
}
