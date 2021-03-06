import React, { Component } from "react";
import "./App.css";
import Header from "./components/Display/Header";
import SearchList from "./components/Display/SearchList";
import UserFavs from "./components/Display/UserFavs";

import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      userFavs: [],
      input: "",
      edit: false
    };
  }

  handleInputChange = value => {
    this.setState({
      input: value
    });
  };

  searchSongs = userEnt => {
    userEnt = this.state.input;
    if (this.state.input) {
      axios
        .get(
          `http://theaudiodb.com/api/v1/json/195003/searchalbum.php?a=${userEnt}`
        )
        .then(res => {
          this.setState({
            searchResults: res.data.album,
            input: ""
          });
        });
    }
  };

  getUserFavs = () => {
    axios.get("/api/albums").then(response => {
      this.setState({ userFavs: response.data });
    });
  };

  addToFavs = index => {
    this.state.searchResults.map(e => {
      if (+index === +e.idAlbum) {
        return axios
          .post("/api/albums", {
            id: e.idAlbum,
            artist: e.strArtist,
            genre: e.strGenre,
            artwork: e.strAlbumThumb
          })
          .then(res => {
            this.setState({
              userFavs: res.data
            });
          });
      }
    });
  };

  deleteFromFavs = index => {
    axios.delete(`/api/albums/${+index}`).then(res => {
      this.setState({
        userFavs: res.data
      });
    });
  };

  updateFav = (index, artwork) => {
    axios.put(`/api/albums/${index}`, { artwork }).then(res => {
      this.setState({
        userFavs: res.data
      });
    });
  };

  render() {
    if (this.state.searchResults) {
      var results = this.state.searchResults.map((e, i) => {
        return (
          <SearchList
            key={i}
            id={e.idAlbum}
            artist={e.strArtist}
            genre={e.strGenre}
            artwork={e.strAlbumThumb}
            addToFavsFn={this.addToFavs}
          />
        );
      });
    }
    return (
      <div className="App">
        <Header />
        <div className="search">
          <input
            className="search-input"
            placeholder="Find an album here..."
            value={this.state.input}
            onChange={e => {
              this.handleInputChange(e.target.value);
            }}
          />
          <br />
          <button className="go-button" onClick={this.searchSongs}>
            Go
          </button>
        </div>
        <div className="mid">
          <span>
            <h1>Selection:</h1>
          </span>
          <span>
            <h1>Your Favorites:</h1>
          </span>
        </div>
        <span id="click-info">Click to add or remove album to favorites.</span>
        <div className="main">
          <div className="left-cont">{results}</div>
          <div className="right-cont">
            <UserFavs
              userFavs={this.state.userFavs}
              updateFavFn={this.updateFav}
              deleteFromFavsFn={this.deleteFromFavs}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
