import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import ContactUs from "./components/contacts/ContactUs";
import Header from "./comments/Header";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contacts" component={ContactUs} />
    </div>
  );
}

export default App;
