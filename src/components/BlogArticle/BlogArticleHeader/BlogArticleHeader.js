import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import "./BlogArticleHeader.css";

export default function BlogArticleHeader({
    cat = "Category",
    heading = "Heading",
    date = "January 01, 2000",
    comments = [],
    onClickDelete = () => {},
}) {
    return (
        <header className="blog-article__header">
            <Button onClick={onClickDelete} kind="secondary">
                X
            </Button>
            <a href="#" className="category">
                {cat}
            </a>
            <h3 className="heading">
                <Link to={`/${cat}/${heading}`}>{heading}</Link>
            </h3>
            <div>
                <p className="date" title="Date">
                    {date}
                </p>
                <a href="#" className="comments" title="Comments">
                    <i className="fa-regular fa-comments"></i>
                    {comments.length}
                </a>
            </div>
        </header>
    );
}
