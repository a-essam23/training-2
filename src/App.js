import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "./components";
import { Homepage } from "./pages";
function App() {
    return (
        <Layout>
            <BlogContext>
                <Router>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/:genre" element={<Genrepage />} />
                        <Route path="/:genre/:blog" element={<Blogpage />} />
                    </Routes>
                </Router>
                <Homepage />
            </BlogContext>
        </Layout>
    );
}

export default App;
