import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import uhuru from '../images/uhuru.png';
import parl from '../images/parl.jpg';
import women from '../images/women.JPG';

class Meetups extends Component{
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }
  render(){
    const { index, direction } = this.state;

    return (
      <div className="meetup-conainer">
        <span><h2>Latest meetups Gitaru</h2></span>
      <Carousel
        className="meetup"
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={uhuru}
            alt="First slide"
          />
          <Carousel.Caption className="meetup-caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={parl}
            alt="Third slide"
          />

          <Carousel.Caption className="meetup-caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={women}
            alt="Third slide"
          />

          <Carousel.Caption className="meetup-caption">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
}
export default Meetups;
