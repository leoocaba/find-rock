import React, { Component } from "react";
import Form from "./components/form.js";
import "./styles/page-home.css";
import Logo from "../src/images/logo.svg";

class PageHome extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="centrado col-md-12 d-flex justify-content-center">
            <div className="col-md-6">
              <div className="col-12 d-flex justify-content-center my-4">
                <img
                  src={Logo}
                  className="img-fluid"
                  width={250}
                  alt="Logo de Find Rock"
                />
              </div>
              <Form />
              <div className="actions col-12 d-flex justify-content-evenly">
                <button className="btng btn btn-sm">
                  Search Similar Artist
                </button>
                <button className="btng btn btn-sm">EscuelaDevRock</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
