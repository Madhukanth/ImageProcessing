import React, { Component } from "react";
import { Navbar } from "react-materialize";
import { Carousel } from "react-bootstrap";
import Main from "./Square";

class DemoCarousel extends Component {
  state = {
    label: []
  };

  render() {
    return (
      <div>
        <Navbar
          style={{ backgroundColor: "black" }}
          brand={<p style={{ marginLeft: 570, marginTop: 2 }}>SuspectTech</p>}
        />
        <center>
          <div style={{ marginTop: 100, width: 650 }}>
            <Carousel interval={null}>
              <Carousel.Item>
                <img
                  style={{ width: 650, height: 400 }}
                  alt="Error"
                  src={require("./assets/1.jpg")}
                />
                <Carousel.Caption>
                  <Main />
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: 750, height: 400 }}
                  alt="Error"
                  src={require("./assets/2.jpg")}
                />
                <Carousel.Caption>
                  <Main />
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: 750, height: 400 }}
                  alt="Error"
                  src={require("./assets/3.jpg")}
                />
                <Carousel.Caption>
                  <Main />
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: 750, height: 400 }}
                  alt="Error"
                  src={require("./assets/4.jpg")}
                />
                <Carousel.Caption>
                  <Main />
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: 750, height: 400 }}
                  alt="Error"
                  src={require("./assets/5.jpg")}
                />
                <Carousel.Caption>
                  <Main />
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: 750, height: 400 }}
                  alt="Error"
                  src={require("./assets/6.jpg")}
                />
                <Carousel.Caption>
                  <Main />
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: 750, height: 400 }}
                  alt="Error"
                  src={require("./assets/7.jpg")}
                />
                <Carousel.Caption>
                  <Main />
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: 750, height: 400 }}
                  alt="Error"
                  src={require("./assets/8.jpg")}
                />
                <Carousel.Caption>
                  <Main />
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: 750, height: 400 }}
                  alt="Error"
                  src={require("./assets/9.jpg")}
                />
                <Carousel.Caption>
                  <Main />
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: 750, height: 400 }}
                  alt="Error"
                  src={require("./assets/10.jpg")}
                />
                <Carousel.Caption>
                  <Main />
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </center>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return <DemoCarousel />;
  }
}

export default App;
