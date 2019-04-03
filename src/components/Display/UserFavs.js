import React, { Component } from "react";
import "../../App.css";

export default class UserFavs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      isClicked: []
    };
  }

  handleClick = i => {
    let isClicked = this.state.isClicked.concat();
    isClicked[i] = !isClicked[i];
    console.log(isClicked);
    this.setState({
      isClicked
    });
  };

  render() {
    let inputShown = this.props.userFavs.map((album, i) => {
      return (
        <div className="search-cont">
          <div
            className="search-results"
            onClick={() => {
              this.props.deleteFromFavsFn(album.id);
            }}
          >
            <h2>{album.artist}</h2>
            <h3>{album.genre}</h3>

            <img src={album.artwork} alt="" />
          </div>
          <button className="update-button" onClick={() => this.handleClick(i)}>
            IMG?
          </button>
          {this.state.isClicked[i] !== undefined && this.state.isClicked[i] && (
            <div>
              <input
                className="edit-field"
                onChange={e => this.setState({ input: e.target.value })}
                placeholder="Image URL..."
              />
              <button
                className="edit-button"
                onClick={() =>
                  this.props.updateFavFn(album.id, this.state.input)
                }
              >
                Submit
              </button>
            </div>
          )}
        </div>
      );
    });

    return <div className="big-cont">{inputShown}</div>;
  }
}
