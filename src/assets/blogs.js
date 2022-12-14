const getRandom = (list = []) => {
  return list[Math.floor(Math.random() * list.length)];
};

const getBlogs = (amount = 0) => {
  const nouns = ["Advice about ", "Let's discuss ", "What is ", "The fall of "];
  const genres = ["Music", "Food", "Fashion", "Lifestyle"];
  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh tortor id aliquet lectus proin. Lobortis elementum nibh tellus molestie nunc. Morbi tristique senectus et netus et. Morbi tempus iaculis urna id volutpat. Viverra orci sagittis eu volutpat. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Diam in arcu cursus euismod quis viverra nibh cras. Mauris augue neque gravida in fermentum et.`.split(
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
  const photo = [
    "http://localhost:3001/img/pic1--1920-1080.jpg",
    "http://localhost:3001/img/pic3--1920-1080.jpg",
    "http://localhost:3001/img/pic5--1920-1080.jpg",
    "http://localhost:3001/img/pic10--1920-1080.jpg",
  ];
  return Array(amount)
    .fill()
    .map((item, i) => {
      return {
        genre: getRandom(genres),
        title: getRandom(nouns) + getRandom(genres),
        teaser: ["", ""].map(() => getRandom(lorem)).join("."),
        date: new Date().toUTCString(),
        comments: Math.floor(Math.random() * 10),
        content: Array(200)
          .fill()
          .map(() => getRandom(lorem))
          .join(".\n"),
        photo: getRandom(photo),
        
      };
    });
};
const blogss = getBlogs(16);
export default blogss;
