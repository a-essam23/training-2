import DataUI from "./Dataa/DataUi";
import NavBar from "./Header/NavBar";
import { useBlogs } from "../context/ContextProvider";

const LayOut = (props) => {
  const { blogs, getBlogs } = useBlogs();

  return (
    <div>
      <NavBar></NavBar>

      {blogs.map((el) => (
        <DataUI items={el} key={el.id} />
      ))}
    </div>
  );
};

export default LayOut;
