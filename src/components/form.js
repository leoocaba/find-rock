import React, { Component } from "react";
import "../styles/search-bar.css";

class Form extends Component {
  render() {
    return (
      <form
        className="row g-3 d-flex my-auto mx-0 px-0"
        onSubmit={this.handleSubmit}
        name="FormSearch"
      >
        <div className="col-6 py-0 my-0 busqueda">
          <input
            value={this.props.busqueda}
            name="busqueda"
            type="text"
            className="form-inline"
            id="buscar"
            placeholder="Buscar una banda"
            onChange={this.props.onChange}
          />
        </div>
      </form>
    );
  }
}

export default Form;
