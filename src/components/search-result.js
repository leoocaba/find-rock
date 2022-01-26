import React, { Component } from "react";
import Loader from "./loader.js";
import ArtistCard from "./artist-card";

class SearchRsult extends Component {
  state = {
    loader: false,
    data: {
      similarartists: {
        artist: [],
      },
    },
  };

  componentDidMount() {
    this.fetchData(
      "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=queen&api_key=e5f95ee46580f32ab850e3cbfddec906&format=json"
    );
  }

  fetchData = async (url) => {
    this.setState({
      loader: true,
    });
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ loader: false, data: data });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            {this.state.loader && <Loader />}
            <h1>{this.props.busqueda}</h1>

            {this.state.data.similarartists.artist.map((artista, i) => {
              return (
                <ArtistCard
                  image={artista.image[3]["#text"]}
                  alt={artista.name}
                  name={artista.name}
                  key={i}
                  size={artista.image[3]["size"]}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default SearchRsult;
