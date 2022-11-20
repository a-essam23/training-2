const getRandom = (list = []) => {
    return list[Math.floor(Math.random() * list.length)];
};

const getBlogs = (amount = 0) => {
    const nouns = [
        "Advice about ",
        "Let's discuss ",
        "What is ",
        "The fall of ",
    ];
    const genres = ["Music", "Food", "Fashion", "Lifestyle"];
    const lorem =
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh tortor id aliquet lectus proin. Lobortis elementum nibh tellus molestie nunc. Morbi tristique senectus et netus et. Morbi tempus iaculis urna id volutpat. Viverra orci sagittis eu volutpat. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Diam in arcu cursus euismod quis viverra nibh cras. Mauris augue neque gravida in fermentum et.`.split(
            "."
        );
    // const blog = {
    //     genre: "Genre",
    //     title: "Title",
    //     date: "26, August, 2016",
    //     teaser: "",
    //     content: "",
    //     comments: 0,
    // };
    return Array(amount)
        .fill()
        .map((item, i) => {
            return {
                genre: getRandom(genres),
                title: getRandom(nouns) + getRandom(genres),
                teaser: ["", ""].map(() => getRandom(lorem)).join("."),
                date: Date.now() - Math.floor(Math.random() * 100000 * i),
                comments: 0,
                content: Array(12)
                    .fill()
                    .map(() => getRandom(lorem))
                    .join(".\n"),
            };
        });
};
const blogs = getBlogs(16);
export default blogs;
