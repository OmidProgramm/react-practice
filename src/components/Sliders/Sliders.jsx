import React from 'react'
import "./Sliders.css"
import Carousel from 'react-bootstrap/Carousel';
const Sliders = ({slider}) => {
    console.log(slider)
  return (
    <div className="sliders">
        <Carousel  className="main-slider">
            {
                slider && slider.map(elem=>{
                    return  <Carousel.Item key={elem.id}>
                            <img
                            className="d-block"
                            src={elem.image}
                            alt={elem.alt}
                            />
                            <Carousel.Caption>
                                <h5>{elem.title}</h5>
                                <p>
                                    {elem.description.substr(0,180)}
                                </p>
                        </Carousel.Caption>
            </Carousel.Item>
                })
            }
        </Carousel>
    </div>
  )
}

export default Sliders