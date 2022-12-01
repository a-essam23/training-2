import DataUI from "./Dataa/DataUi";
import NavBar from "./Header/NavBar";

const LayOut = (props) => {
  const DD = props.info;
  console.log(props)

  return (
    <div>
      <NavBar></NavBar>

      {DD.map((el) => (
        <DataUI hand={props.handler} items={el} key={Math.random()} />
      ))}
    </div>
  );
};

export default LayOut;
