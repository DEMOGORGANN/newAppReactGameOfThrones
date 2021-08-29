import React, { Component } from "react";
import "./itemList.css";
import gotService from "../../services/service";
import ErrorMessage from "../ErrorsItem/Error";
import Spinner from "../Spinner/Spinner";

export default class ItemList extends Component {
  gotService = new gotService();

  state = {
    charList: null,
    error: false,
  };
  
  componentDidMount() {
    this.gotService.getAllCharacters().then((charList) => {
      this.setState({
        charList,
        error: false,
      });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id, name } = item;
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onCharSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { charList, error } = this.state;

    if (error) {
      return <ErrorMessage />;
    }

    if (!charList) {
      return <Spinner />;
    }

    const items = this.renderItems(charList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
