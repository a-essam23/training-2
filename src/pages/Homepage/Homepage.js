import { BlogHeader } from "../../components";
import blogs from "../../assets/blogs";
import styles from "./Homepage.module.css";
const pageData = Array(16)
    .fill()
    .map((el, i) => {
        return {
            genre: "Genre " + (i + 1),
            title: "Title " + (i + 1),
            date: `${Math.floor(Math.random() * 31)},
            May , ${Math.floor(Math.random() * 2012 + 2000)} `,
        };
    });

const Homepage = () => {
    return (
        <section className="min-h-screen gap-16 flex flex-col items-center">
            {blogs.map((item) => (
                <BlogHeader content={item} />
            ))}
        </section>
    );
};

export default Homepage;
