import { navItems, blogArticles } from "../../assets/data";
import { BlogArticle } from "../../components";

export default function GenrePage() {
    return (
        <main>
            {navItems.map(
                ({ title, sublist }) =>
                    title === "Categories" &&
                    sublist.map(({ title }) =>
                        blogArticles.map(
                            (obj) => obj.cat === title && <BlogArticle key={obj.id} content={obj} />
                        )
                    )
            )}
        </main>
    );
}
