import "./BlogArticleHeader.css";

export default function BlogArticleHeader({ cat = "Category", heading = "Heading", date = "January 01, 2000", comments = [] }) {
    return (
        <header className="blog-article__header">
            <a href="#" className="category">
                {cat}
            </a>
            <h3 className="heading">
                <a href="#">{heading}</a>
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
