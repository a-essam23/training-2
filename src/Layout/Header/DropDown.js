import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function DropDown() {
  return (
    <>
      {["categories", "Products", "Blog layout", "Contact"].map((variant) => (
        <DropdownButton
          as={ButtonGroup}
          key={variant}
          id={`dropdown-variants-${variant}`}
          variant={variant.toUpperCase()}
          title={variant}
        >
          <Dropdown.Item eventKey="1">Item 1</Dropdown.Item>
          <Dropdown.Item eventKey="2"> Item 2</Dropdown.Item>
          <Dropdown.Item eventKey="3"> Item 3</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4"> Item 4</Dropdown.Item>
        </DropdownButton>
      ))}
    </>
  );
}

export default DropDown;
