import { React } from "react";

const Btn = (props) => {
  return (
    <div className="">
      <div className="col-12 d-flex  justify-content-center pt-5 ">
        <button
          onClick={props.action}
          style={{
            background: props.state ? "white" : `#B49543`,
            color: props.state ? "#B49543" : `#FFFFFF`,
            border: props.state ? "1px solid #EEEEEE" : "none",
            font: "inter",

            fontWeight: "400",
            width: "94px",
            height: "29px",
          }}
        >
          Button 1
        </button>
      </div>
    </div>
  );
};

export default Btn;
