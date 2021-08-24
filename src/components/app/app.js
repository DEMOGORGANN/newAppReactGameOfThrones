import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header/header";
import RandomChar from "../randomChar/randomChar";
import ItemList from "../itemList/itemList";
import CharDetails from "../charDetails/charDetails";
import ErrorMessage from "../ErrorsItem/Error";

export default class App extends Component {
  state = {
    error: false,
    showRandomChars: true,
  };
  toggleRandomChar = () => {
    this.setState((state) => {
      setTimeout(
        () =>
          this.setState((state) => {
            return {
              showRandomChars: !state.showRandomChars,
            };
          }),
        0
      );
      return {
        showRandomChars: !state.showRandomChars,
      };
    });
  };

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    const char = this.state.showRandomChars ? <RandomChar /> : null;
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              <button className="toggle-btn" onClick={this.toggleRandomChar}>
                Toggle random character
              </button>
              {char}
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <ItemList />
            </Col>
            <Col md="6">
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
