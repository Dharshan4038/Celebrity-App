import React, { useEffect, useState } from "react";
import a1 from "../images/image-4.jpg";
import a2 from "../images/image-2.jpg";
import a3 from "../images/image-3.jpg";
import a4 from "../images/image-1.jpg";
import a5 from "../images/image-5.jpg";

export class Home extends React.Component {
    constructor(props) {
      super(props);
      this.switchImage = this.switchImage.bind(this);
      this.state = {
        currentImage: 0,
        images: [a1,a2,a3,a4,a5]
      };
    }
    switchImage() {
      if (this.state.currentImage < this.state.images.length - 1) {
        this.setState({
          currentImage: this.state.currentImage + 1
        });
      } else {
        this.setState({
          currentImage: 0
        });
      }
      return this.currentImage;
    }

    componentDidMount() {
      setInterval(this.switchImage, 2500);
    }

    render() {
      return (
        <div id="Home" className="slideshow-container">
          <img
            src={this.state.images[this.state.currentImage]}
            className="pics"
          />
        </div>
      );
    }
  }


