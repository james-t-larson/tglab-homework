import React from 'react'
import { Carousel } from 'react-bootstrap'
import carousel01 from '../images/carousel01.jpg'
import carousel02 from '../images/carousel02.jpg'

function RegistrationCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel01} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <h3>More text</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel02} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <h3>More text</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default RegistrationCarousel
