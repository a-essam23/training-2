import { Link } from "react-router-dom";
import "./BlogArticleHeader.css";

export default function BlogArticleHeader({ genre, heading, date, comments = [] }) {
    return (
        <header className="article__header">
            <h2 className="article__header__genre">
                <Link to={`/Genre/${genre}`}>{genre}</Link>
            </h2>
            <h3 className="article__header__heading">
                <Link to={`/Genre/${genre}/${heading.split(" ").join("_")}`}>{heading}</Link>
            </h3>
            <section className="article__header__date_and_comments">
                <p className="article__header__date">{date}</p>
                <p className="article__header__comments" title="Comments">
                    <i className="fa-regular fa-comments"></i>
                    {comments.length}
                </p>
            </section>
        </header>
    );
}
