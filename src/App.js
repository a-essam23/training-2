import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Homepage } from "./pages";
import { BlogProvider } from "./context/BlogContext";
import Genrepage from "./pages/Genrepage/Genrepage";
import Blogpage from "./pages/Blogpage/Blogpage";

function App() {
  return (
    <Layout>
      <Router>
        <BlogProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            
            <Route path="/:genre" element={<Genrepage />} />
            <Route path="/:genre/:blog" element={<Blogpage />} />
          </Routes>
        </BlogProvider>
      </Router>
    </Layout>
  );
}

export default App;
