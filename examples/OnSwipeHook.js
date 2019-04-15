import React, { Component } from "react";
import Slider from "../src/slider";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false,
      moving: false
    };
  }

  onSwipeStart() {
    this.setState({
      dragging: true
    });
  }

  onSwipeMove() {
    this.setState({
      moving: true
    });
  }

  onSwipeEnd() {
    this.setState({
      dragging: false,
      moving: false
    });
  }

  render() {
    const { dragging, moving } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      onSwipeStart: () => this.onSwipeStart(),
      onSwipeEnd: () => this.onSwipeEnd()
    };
    return (
      <div>
        <h2> OnSwipe hooks</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <p>{dragging ? "dragging" : "not dragging"}</p>
        <p>{moving ? "moving" : "not moving"}</p>
      </div>
    );
  }
}
