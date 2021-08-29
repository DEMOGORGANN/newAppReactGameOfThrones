import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header/header";
import RandomChar from "../randomChar/randomChar";
import ErrorMessage from "../ErrorsItem/Error";
import СharsetPage from "../charsetPage/СharsetPage";
import "./app.css";

export default class App extends Component {
  state = {
    error: false,
    showRandomChars: true,
  };
  toggleRandomChar = () => {
    this.setState((state) => {
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
              {char}
              <button className="toggle-btn" onClick={this.toggleRandomChar}>
                Toggle random character
              </button>
            </Col>
          </Row>
          <СharsetPage />
        </Container>
      </>
    );
  }
}
