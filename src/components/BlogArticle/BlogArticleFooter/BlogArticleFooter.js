import { Link } from "react-router-dom";
import { Button, ContactLinks } from "../../../components";
import "./BlogArticleFooter.css";

export default function BlogArticleFooter({ genre, heading }) {
    return (
        <footer className="article__footer">
            <ContactLinks />
            <hr />
            <Button kind={"primary"}>
                <Link to={`/Genre/${genre}/${heading.split(" ").join("_")}`}>Continue Reading</Link>
            </Button>
        </footer>
    );
}
