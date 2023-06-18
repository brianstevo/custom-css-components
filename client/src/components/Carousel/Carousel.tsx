import React, { ReactNode, useEffect, useRef, useState } from 'react'
// import './Carousel.css'

export interface CarouselProps {
  images: string[]
  children?: ReactNode
}

const Carousel = ({ images, children }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length)
  }

  return (
    <div className='carousel-container'>
      <div className='carousel'>
        <button className='prev-btn' onClick={prevSlide}>
          <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 320 512'>
            <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z' />
          </svg>
        </button>
        <img className='slide-image' src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} style={{ width: '400px', height: '250px' }} />
        <button className='next-btn' onClick={nextSlide}>
          <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 320 512'>
            <path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Carousel
