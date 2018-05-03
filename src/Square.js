import React, { Component } from "react";
import Draggable from "react-draggable";
import { Row, Col, Button, Input, Chip } from "react-materialize";
import Modal from "react-modal";

//Styles for Modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

//Set the root as Modal's app element
Modal.setAppElement(document.getElementById("root"));

//Global Variables
var index;
var colorIndex;
var height;
var width;
var color;
var label;

//Square Component
class Square extends Component {
  componentWillMount() {
    this.setState({
      height: this.props.height ? this.props.height : 125,
      width: this.props.width ? this.props.width : 150,
      color: this.props.color ? this.props.color : "blue"
    });
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        {/*
     
     <Draggable> makes the square to be dragged all over the screen
     
     <svg><rect> is used to create a rectangle with height,width,style etc,..
     */}
        <Draggable>
          <div style={{ direction: "flex" }}>
            <p style={{ paddingLeft: 120 }}>
              {this.props.pos ? this.props.pos : 1}
            </p>
            <svg style={{ direction: "flex" }}>
              <rect
                x={50}
                y={25}
                width={this.props.width ? this.props.width : 150}
                height={this.props.height ? this.props.height : 125}
                style={{
                  fill: "transparent",
                  stroke: this.props.color ? this.props.color : "blue",
                  strokeWidth: 3
                }}
              />
            </svg>
          </div>
        </Draggable>
      </div>
    );
  }
}

// App component

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [<Square pos={1} />],
      labels: [],
      deleteModalIsOpen: false,
      colorModalIsOpen: false,
      resizeModalIsOpen: false,
      labelModalIsOpen: false
    };
  }

  //add function to add a square

  add = i => {
    this.state.squares.push(
      <Square
        pos={this.state.squares[this.state.squares.length - 1].props.pos + 1}
      />
    );
    console.log(this.state.squares[this.state.squares.length - 1].props.pos);
    this.setState(this.state);
  };

  //delete function which uses index of the square as parameter

  delete = i => {
    this.state.squares.splice(i, 1, <p pos={i + 1} />);
    this.setState(this.state);
  };

  //recolor function which uses index and color from user as parameters
  //preheight and prewidth stores the current height and width of the square before changing the color

  recolor = (i, color) => {
    let preheight = this.state.squares[i].props.height
      ? this.state.squares[i].props.height
      : 100;
    let prewidth = this.state.squares[i].props.width
      ? this.state.squares[i].props.width
      : 150;
    this.state.squares.splice(
      i,
      1,
      <Square
        pos={colorIndex}
        color={color}
        height={preheight}
        width={prewidth}
      />
    );
    this.setState(this.state);
  };

  //resize function which uses index,height and width from user as parameters
  //precolor stores the current color of the square before changing the height and width

  resize = (i, height, width) => {
    let precolor = this.state.squares[i].props.color
      ? this.state.squares[i].props.color
      : "blue";
    this.state.squares.splice(
      i,
      1,
      <Square pos={i + 1} height={height} width={width} color={precolor} />
    );
  };

  label = text => {
    this.state.labels.push(
      <Draggable>
        <div>
          <Chip>{text}</Chip>
        </div>
      </Draggable>
    );
    this.setState(this.state);
  };

  // closedeleteModal,closecolorModal,closeresizeModal for closing the Modal
  closedeleteModal = () => {
    this.setState({
      deleteModalIsOpen: false
    });
  };

  closecolorModal = () => {
    this.setState({
      colorModalIsOpen: false
    });
  };

  closeresizeModal = () => {
    this.setState({
      resizeModalIsOpen: false
    });
  };

  closeLabelModal = () => {
    this.setState({ labelModalIsOpen: false });
  };

  render() {
    return (
      <div>
        {/* Navigation bar */}
        {/* Add,delete,resize and recolor buttons */}
        <Row style={{ marginBottom: 40 }}>
          <Col s={3}>
            <Button
              style={{ marginLeft: -150, marginBottom: 30 }}
              onClick={() => {
                this.add(this.state.squares.length + 1);
              }}
            >
              Add
            </Button>
          </Col>
          <Col s={3}>
            <Button
              style={{ marginLeft: -70, marginBottom: 30 }}
              onClick={() => {
                this.setState({ deleteModalIsOpen: true });
              }}
            >
              Delete
            </Button>
          </Col>
          <Col s={3}>
            <Button
              style={{ marginLeft: 0, marginBottom: 30 }}
              onClick={() => this.setState({ resizeModalIsOpen: true })}
            >
              Resize
            </Button>
          </Col>
          <Col s={3}>
            <Button
              style={{ marginLeft: 50, marginBottom: 30 }}
              onClick={() => this.setState({ colorModalIsOpen: true })}
            >
              Recolor
            </Button>
          </Col>
        </Row>
        {/* Modal for delete,resize and recolor */}
        {/* Delete Modal */}
        <Modal
          isOpen={this.state.deleteModalIsOpen}
          onRequestClose={this.closedeleteModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Input
            s={12}
            label="Square's number"
            onChange={event => {
              index = event.target.value;
            }}
          />
          <Button
            onClick={() => {
              this.closedeleteModal();
              this.delete(index - 1);
            }}
          >
            Delete
          </Button>
        </Modal>
        {/* Recolor Modal  */}
        <Modal
          isOpen={this.state.colorModalIsOpen}
          onRequestClose={this.closecolorModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Input
            s={12}
            label="Square's number"
            onChange={event => {
              colorIndex = event.target.value;
            }}
          />
          <Input
            s={12}
            label="Color"
            onChange={event => {
              color = event.target.value;
            }}
          />
          <Button
            onClick={() => {
              this.closecolorModal();
              this.recolor(colorIndex - 1, color);
            }}
          >
            Recolor
          </Button>
        </Modal>
        {/* Resize Modal */}
        <Modal
          isOpen={this.state.resizeModalIsOpen}
          onRequestClose={this.closeresizeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Input
            s={12}
            label="Square's number"
            onChange={event => {
              index = event.target.value;
            }}
          />
          <Input
            s={12}
            label="Height"
            onChange={event => {
              height = event.target.value;
            }}
          />
          <Input
            s={12}
            label="Width"
            onChange={event => {
              width = event.target.value;
            }}
          />
          <Button
            onClick={() => {
              this.closeresizeModal();
              this.resize(index - 1, height, width);
            }}
          >
            Resize
          </Button>
        </Modal>
        <Modal
          isOpen={this.state.labelModalIsOpen}
          onRequestClose={this.closeLabelModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Input
            s={12}
            label="Label"
            onChange={event => {
              label = event.target.value;
            }}
          />
          <Button
            onClick={() => {
              this.closeLabelModal();
              this.label(label);
            }}
          >
            Add Label
          </Button>
        </Modal>
        {/* Row which shows the all the squares in the state */}
        <Row>
          {this.state.squares.map((sq, i) => (
            <Col key={i} s={1} style={{ marginRight: 20 }}>
              {sq}
            </Col>
          ))}
          <div>{this.state.labels.map(lb => lb)}</div>
        </Row>

        <Button
          style={{ marginLeft: -400, marginBottom: -60 }}
          onClick={() => this.setState({ labelModalIsOpen: true })}
        >
          Add Label
        </Button>
      </div>
    );
  }
}

export default Main;
