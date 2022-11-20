import BlogItems from "./BlogItems";
const Blog = (props) => {
  const dd = props.info;
  return (
    <div>
      {dd.map((el, i) => (
        <BlogItems items={el} key={Math.random()} />
      ))}
    </div>
  );
};

export default Blog;
