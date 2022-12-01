import DropDown from "./DropDown";

const NavBar = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center pt-4 border-bottom pb-5 ">
          <img
            src="https://www.cssigniter.com/demos/olsen-light/wp-content/themes/olsen-light/images/logo.png"
            alt="logo"
          ></img>
        </div>
      </div>
      <div className="row pt-4 ">
        <div className="d-flex justify-content-between">
          <div className="col-11">
            <DropDown />
          </div>
          <div className="col-2 ">
            <a href="ls" className="mx-1">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="ls" className="mx-1">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="ls" className="mx-1">
              <i className="fa-brands fa-reddit"></i>
            </a>
            <a href="ls" className="mx-1">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="ls" className="mx-1">
              <i className="fa-brands fa-staylinked"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
