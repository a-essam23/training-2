import { blogArticles } from "../assets/data/blogArticles/blogArticles";
import { useState, createContext, useContext } from "react";
export const BlogContext = createContext({
    blogs: [],
    removeBlog: (id) => {},
    getBlog: (heading) => {},
});

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState(blogArticles);

    const addBlog = (id) => {};

    const removeBlog = (id) => {
        let blogs_ = blogs.filter((el) => el.id !== id);
        setBlogs(blogs_);
    };

    const getBlog = (heading) => {
        return blogs.find((el) => el.heading === heading);
    };

    const context = {
        blogs,
        removeBlog,
        getBlog,
    };
    return (
        <BlogContext.Provider value={context}>{children}</BlogContext.Provider>
    );
};

export const useBlogs = () => useContext(BlogContext);
