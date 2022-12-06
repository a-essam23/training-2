import { createContext, useState, useContext } from "react";

import { Api } from "../Layout/Api/Call";

export const BlogContext = createContext({ blogs: [], getBlog: (Subject) => {} });

export const ContentProvider = ({ children }) => {
  const [blogs, SetBlogs] = useState(Api);

  const addBlog = (id) => {};
  const getBlog = (Subject) => {
    return blogs.find((el) => el.Subject === Subject);
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
