import { React, useState } from "react";
import LayOut from "./Layout/Layout";
import Page from "./Layout/PageF/Page";
import { ContentProvider } from "./context/ContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="container ">
      <ContentProvider>
        <Router>
          <Routes>
            <Route path={"/"} element={<LayOut />} />
            <Route path={"/:Post/Subject"} element={<Page />} />
          </Routes>
        </Router>
      </ContentProvider>
    </div>
  );
}

export default App;
