import React, { Component } from "react";

import SearchBar from "./components/search-bar";
import SimilarArtist from "./components/similar-artist";
import "./styles/page-artist.css";

class PageArtist extends Component {
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
        <div className="container">
          <div className="row centrar">
            <div className="col-12 d-flex flex-column justify-content-center">
              <div className="col-6 my-3 mx-auto">
                <img
                  src="http://animalsrecords.com.ar/files/products/20161021201814_2087507.jpg"
                  alt="Gustavo Cerati"
                  className="disc-image-artist"
                />
                <h3 className="my-3">Gustavo Cerati</h3>
                <p className="my-3">
                  Gustavo Adrián Cerati (Buenos Aires, 11 de agosto de 1959-Ib.,
                  4 de septiembre de 2014) fue un músico, cantautor, actor y
                  productor discográfico argentino que obtuvo reconocimiento
                  internacional por haber sido el líder, vocalista, compositor y
                  guitarrista de la banda de rock Soda Stereo. Parte de la
                  prensa especializada y músicos lo consideran como uno de los
                  artistas más influyentes del rock latinoamericano y
                  precursores de la música electrónica en el continente.{" "}
                </p>
              </div>
              <SimilarArtist />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PageArtist;
