import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactPage from "./ContactPage";
import OptionsPage from "./OptionsPage/OptionsPage";
import QueryPage from "./QueryPage";
import Header from "./Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/">
          <QueryPage />
        </Route>
        <Route exact path="/options/:surgeryId">
          <OptionsPage />
        </Route>
        <Route exact path="/contact/:hospitalId">
          <ContactPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
