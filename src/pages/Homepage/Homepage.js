import BlogHeader from "../../components/blog/BlogHeader/BlogHeader";
import { useBlogs } from "../../context/BlogContext";
import styles from "./Homepage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../../components/blog/Slider/Slider";

import Blog from "../../components/blog/Blog/Blog";

const Homepage = () => {
  const { blogs } = useBlogs();
  return (
    <div>
      <Slider />
      <section
        className={`min-h-screen gap-16 flex flex-col items-center ${styles.blogHeader}`}
      >
        {blogs.map((item, i) => (
          <Blog content={item} key={i} id={i} />
        ))}
      </section>
    </div>
  );
};

export default Homepage;
