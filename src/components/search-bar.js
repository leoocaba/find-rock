import React from "react";
import Form from "./form.js";
import { Link } from "react-router-dom";
import "../styles/search-bar.css";
import Logo from "../images/logo.svg";

class SearchBar extends React.Component {
  state = { busqueda: "" };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.name, "Clequeado!");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-row justify-content-center mx-0 px-0">
              <div className="col-md-4 my-3 d-flex">
                <Link to="/">
                  <img src={Logo} className="logo-barra" alt="Logo Find-Rock" />
                </Link>
              </div>
              <div className="col-md-8 my-3">
                <Form />
              </div>
            </div>
            <hr />
          </div>
        </div>
      </>
    );
  }
}

export default SearchBar;
