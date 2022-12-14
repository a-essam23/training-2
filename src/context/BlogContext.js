import blogss from "../assets/blogs";

import { useState, createContext, useContext } from "react";
import { blogArticles } from "../assets/Blogdummy";
export const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(blogArticles);

  const getBlog = (heading) => {
    return blogs.find((el) => el.heading === heading);
  };

  const context = {
    blogs,
    getBlog,
  };

  return (
    <BlogContext.Provider value={context}>{children}</BlogContext.Provider>
  );
};

export const useBlogs = () => useContext(BlogContext);
