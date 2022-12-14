import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import styles from "./BlogHeader.module.css";

const BlogHeader = ({ content } ) => {
  return (
    <div className="container text-center">
      <div className={`text-center ${styles.genre}`}>{content.cat}</div>

      <Link
        to={`/${content.cat}/${content.heading}`}
        className={`text-center ${styles.title}`}
      >
        {content.heading}
      </Link>

      <div className={`text-center ${styles.date}`}>{content.date}</div>
    </div>
  );
};

export default BlogHeader;
