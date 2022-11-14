const BlogHeader = ({
    content: {
        genre = "Genre",
        title = "Title",
        date = "26, August, 2016",
        teaser = "",
        comments = 0,
    },
    className,
}) => {
    return (
        <div
            className={`flex flex-col justify-center items-center gap-4 ${className}`}
        >
            <div>{genre}</div>
            <div>{title}</div>
            <div className="flex gap-6">
                <div>{date}</div>
                <div>{comments}</div>
            </div>
            <div>{teaser}</div>
        </div>
    );
};

export default BlogHeader;
