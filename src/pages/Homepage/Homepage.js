import { MainLayout } from "../../layouts";
import { BlogArticle, Slider } from "../../components";
import { useBlogs } from "../../context/BlogProvider";

export default function Homepage({ onArticleOpen }) {
    const { blogs, removeBlog } = useBlogs();
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
                    {blogs.map((element) => (
                        <BlogArticle
                            key={element.id}
                            content={element}
                            onArticlePageOpen={articlePageOpenHandler}
                            onClickDelete={() => removeBlog(element.id)}
                        />
                    ))}
                </section>
            </main>
        </MainLayout>
    );
}
