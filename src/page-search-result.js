import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import SearchBar from "./components/search-bar";
import SearchResult from "./components/search-result";

class PageSearchRsult extends Component {
  state = {
    busqueda: "",
  };

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <SearchResult busqueda={this.state.busqueda} />
      </>
    );
  }
}

export default PageSearchRsult;
