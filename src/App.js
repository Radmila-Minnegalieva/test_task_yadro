import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Form from "./components/Form";
import Translation from "./components/Translation";

const App = () => {
  const urls = {
    Form: {
      path: "/registration",
      element: <Form />,
    },
    Translation: {
      path: "/",
      element: <Translation />,
    },
    TranslationAuth: {
      path: "/user",
      element: <Translation />,
    },
  };

  return (
    <Router>
      <div className="page">
        <div className="background"></div>
        <Header />
        <Routes>
          {Object.entries(urls).map(([key, { path, element }]) => (
            <Route key={key} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
