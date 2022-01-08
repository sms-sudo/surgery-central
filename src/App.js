import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import OptionsPage from "./components/OptionsPage/OptionsPage";
import QueryPage from "./components/QueryPage";
import Header from "./components/Header";
import { LoadScript } from "@react-google-maps/api";
import config from "./config/config";
import { GlobalProvider } from "./contexts/GlobalContext";

function App() {
  return (
    <div>
      <LoadScript
        googleMapsApiKey={config.googlePlacesApiKey}
        libraries={["places"]}
      >
        <GlobalProvider>
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
        </GlobalProvider>
      </LoadScript>
    </div>
  );
}

export default App;
