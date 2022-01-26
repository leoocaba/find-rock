import React from "react";
import PageHome from "./page-home.js";
import PageArtist from "./page-artist.js";
import PageSearchResult from "./page-search-result.js";
import Layout from "./components/layout";
import {
  BrowserRouter,
  ReactBrowser,
  Route,
  Switch,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route Exact path="/busqueda" component={PageSearchResult} />
          <Route Exact path="/artista" component={PageArtist} />
          <Route Exact path="/" component={PageHome} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
