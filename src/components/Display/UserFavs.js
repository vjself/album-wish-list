import React, { Component } from "react";
import "../../App.css";

export default class UserFavs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  updateForm = id => {
    console.log(id);
    return (
      <span className="update-input">
        <input
          placeholder="Enter url here..."
          onChange={e => {
            this.setState({
              input: e.target.value
            });
          }}
        />
        <button onClick={() => this.props.updateFavFn(id, this.state.input)} />
      </span>
    );
  };

  render() {
    return (
      <div className="big-cont">
        <div
          className="search-results"
          onClick={() => {
            this.props.deleteFromFavsFn(this.props.id);
          }}
        >
          <h2>{this.props.artist}</h2>
          <h3>{this.props.genre}</h3>

          <img src={this.props.artwork} alt="" />
        </div>
        <button
          className="update-button"
          onClick={() => this.updateForm(this.props.id)}
        >
          Add data?
        </button>
      </div>
    );
  }
}
