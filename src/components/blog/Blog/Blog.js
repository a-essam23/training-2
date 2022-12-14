import BlogHeader from "../BlogHeader/BlogHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Blog.module.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Blog = (props) => {
  return (
    <div className={`container `}>
      <div className={`col-12 ${styles.hed}`}>
        <BlogHeader content={props.content} id={props.id}></BlogHeader>
      </div>

      <div className={`col-12 ${styles.flx}`}>
        <img className={`${styles.img}`} src={props.content.photo} alt="ff" />
        <figcaption className={`${styles.fig}`}>
          {props.content.teaser}
        </figcaption>
        <Link
          to={`/${props.content.cat}/${props.content.heading}`}
          className={`text-center ${styles.title}`}
        >
          <button className={`${styles.bb}`}>continue reading</button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
