import React, { Component } from "react";
import ArtistCard from "./artist-card";
import "../styles/artist-card.css";
import "../styles/similar-artist.css";

class SimilarArtist extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-center mt-4">
            <h5>Similar Artist</h5>
            <hr />

            <div className="d-flex justify-content-center mx-auto">
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <ArtistCard
                  image="https://place-hold.it/300x300"
                  alt="magen de Prueba"
                  name="Test 1"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <ArtistCard
                  image="https://place-hold.it/300x300"
                  alt="magen de Prueba"
                  name="Test 2"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <ArtistCard
                  image="https://place-hold.it/300x300"
                  alt="magen de Prueba"
                  name="Test 3"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <ArtistCard
                  image="https://place-hold.it/300x300"
                  alt="magen de Prueba"
                  name="Test 4"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SimilarArtist;
