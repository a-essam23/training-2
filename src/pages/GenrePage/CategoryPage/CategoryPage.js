import { useParams } from "react-router-dom";
import { blogArticles } from "../../../assets/data";
import { BlogArticle } from "../../../components";

export default function CategoryPage() {
    const { genre } = useParams();
    return (
        <main>
            {blogArticles.map((obj) => {
                if (obj.cat === genre) {
                    return <BlogArticle key={obj.id} content={obj} />;
                }
            })}
        </main>
    );
}
