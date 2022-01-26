import React, { Component } from "react";
import "../styles/artist-card.css";

class ArtistCard extends Component {
  render() {
    return (
      <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
        <div className="mx-4 my-3 item">
          <img
            size={this.props.size}
            src={this.props.image}
            alt={this.props.alt}
            className="disc-image img-fluid"
          />
          <p className="disc-title mt-2 ">{this.props.name}</p>
        </div>
      </div>
    );
  }
}

export default ArtistCard;
