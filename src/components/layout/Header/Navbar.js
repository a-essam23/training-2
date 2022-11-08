import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


const Navbar = (prop) => {
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-12  d-flex justify-content-center mt-4">
          <img
            src="https://www.cssigniter.com/demos/olsen-light/wp-content/themes/olsen-light/images/logo.png"
            alt="logo"
          ></img>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center mt-3 border-bottom pb-3">
          <h5 className="text-muted" style={{ fontFamily: "monospace" }}>
            Head-line here
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="d-flex ">
          <div className="col-11 mt-3 ">
            {["Blog layout", "Post types", "Templets"].map((variant) => (
              <DropdownButton
                className="px-3 text-warning"
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toUpperCase()}
                title={variant}
              >
                <Dropdown.Item eventKey="1">Item</Dropdown.Item>
                <Dropdown.Item eventKey="2">Item</Dropdown.Item>
                <Dropdown.Item eventKey="3">Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Item</Dropdown.Item>
              </DropdownButton>
            ))}
          </div>
          <div className="col-1 mt-4 ">
            <div className="d-flex justify-content-between">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-reddit"></i>
              <i class="fa-brands fa-pinterest"></i>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
