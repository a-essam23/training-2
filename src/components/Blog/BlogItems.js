const BlogItems = (props) => {
  return (
    <div className=" row   ">
      <div className="col-12 d-flex  d-flex justify-content-center p-4 ">
        <div className="text-center">
          <div style={{ Fontfamily: "Sarala" }}>{props.items.Genre}</div>
          <div style={{ fontSize: "20px", fontFamily: "sarala" }}>
            {props.items.Title}
          </div>
          <div>
            {props.items.Date}{" "}
            <a href="ref">
              {" "}
              <i
                class="fa-regular fa-comments"
                style={{ color: "#B49543", fontSize: "15px" }}
              >
                {Math.floor(Math.random() * 10) + 1}
              </i>
            </a>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItems;
