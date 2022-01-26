import React from "react";
import { Audio } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../styles/loader.css";

class Loader extends React.Component {
  render() {
    return (
      <div className="col-12 loader d-flex justify-content-center align-items-center p-0 mt-4">
        <Audio
          className="mt-4"
          color="#000"
          height={100}
          width={100}
          ariaLabel="loading"
        />
      </div>
    );
  }
}

export default Loader;
