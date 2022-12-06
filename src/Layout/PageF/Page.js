import NavBar from "../Header/NavBar";
import { useBlogs } from "../../context/ContextProvider";
import { useParams, Navigate } from "react-router-dom";

const Page = (props) => {
  const { blogId } = useParams();
  const { getBlog } = useBlogs();
  const blog = getBlog(blogId);
  if (!blog) return <Navigate to="/" replace />;
  return (
    <div>
      <NavBar></NavBar>
      <div className="container" key={blog.id}>
        <div className="row mt-5">
          <div className="d-flex justify-content-center mt-5 ">
            <div className="col-12 flex-column text-center ">
              <h5>{blog.post}</h5>
              <h1>{blog.Subject}</h1>
              <p>
                {blog.Date}{" "}
                <a href="ls">
                  <i className="fa-solid fa-comments"></i>
                </a>
              </p>

              <img
                src={blog.Img}
                alt="ads"
                style={{ width: "1000px", height: "500px" }}
                className="border-bottom pb-5 text-center"
              ></img>
              <p
                style={{
                  width: "1000px",
                  marginLeft: "130px",
                  textAlign: "justify",
                }}
                className="pt-5"
              >
                {blog.Article}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
