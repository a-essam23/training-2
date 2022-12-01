import NavBar from "../Header/NavBar";

const Page = (props) => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <div className="row mt-5">
          <div className="d-flex justify-content-center mt-5 ">
            <div className="col-12 flex-column text-center ">
              <h5>{props.info[0].post}</h5>
              <h1>{props.info[0].Subject}</h1>
              <p>
                {props.info[0].Date}{" "}
                <a href="ls">
                  <i className="fa-solid fa-comments"></i>
                </a>
              </p>

              <img
                src={props.info[0].Img}
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
                {props.info[0].Article}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
