import React, { Component } from "react";
import GotService from "../../services/service";
import "./randomChar.css";
import ErrorInfn from "./../ErrorsItem/Error";
import Spinner from "./../Spinner/Spinner";

export default class RandomChar extends Component {
  constructor(props) {
    super();
    this.UpdateCharset();
  }
  charset = new GotService();
  state = {
    char: {},
    loading: true,
    error: false,
  };

  onCharLoaded = (char) => {
    this.setState({
      char,
      loading: false,
    });
  };

  onCharError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  UpdateCharset() {
    const id = Math.floor(Math.random() * 140 + 25);
    this.charset
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onCharError);
  }

  render() {
    const { char, loading, error } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const errors = error ? <ErrorInfn /> : null;
    const content = !(loading || error) ? <View char={char} /> : null;

    return (
      <div className="random-block rounded">
        {spinner}
        {errors}
        {content}
      </div>
    );
  }
}

const View = ({ char }) => {
  const { name, gender, born, died, culture } = char;

  return (
    <>
      <h4>Rm Cr: {name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  );
};
