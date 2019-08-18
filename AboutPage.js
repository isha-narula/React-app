import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <div className="jumbotron">
    <h2>About Page</h2>
    <p>This app uses Redux, React and many other useful libraries.</p>
    <Link to="contacts" className="btn btn-primary btn-lg">
      Contacts
    </Link>
  </div>
);

export default AboutPage;
