import React, { ReactNode, useEffect, useRef, useState } from 'react'
import './Carousel.css'

export interface CarouselProps {
  images?: string[]
  itemsPerView?: any
  children?: any
}

const Carousel3 = ({ images, itemsPerView, children }: CarouselProps) => {
  const imageWrapperRef = useRef<HTMLDivElement>(null)
  // const [imageItems, setImageItems] = useState<HTMLElement[]>([])
  // const [imageLength, setImageLength] = useState<number>(0)
  let imagelength = useRef<number>(0)
  let imageitems = useRef<HTMLElement[]>([])
  let perView = useRef<number>(3)
  // const [totalScroll, setTotalScroll] = useState<number>(0)
  let totalscroll = useRef<number>(0)
  // const [autoScroll, setAutoScroll] = useState<NodeJS.Timeout | null>(null)
  const autoScroll = useRef<NodeJS.Timeout | null>(null)
  const delay = 2000

  useEffect(() => {
    imageitems.current = Array.from(imageWrapperRef.current?.querySelectorAll('.image-wrapper > *') || [], (el) => el as HTMLElement)
    imagelength.current = imageitems.current.length
    if (imageWrapperRef.current) {
      imageWrapperRef.current.style.setProperty('--per-view', String(perView.current))
      for (let i = imagelength.current - 1; i >= 0; i--) {
        if (imageitems.current[i]) {
          console.log(imageWrapperRef.current)

          imageWrapperRef.current.insertAdjacentHTML('afterbegin', imageitems.current[i].outerHTML)
        }
      }
      const autoScrollInterval = setInterval(scrolling, delay)
      autoScroll.current = autoScrollInterval
    }

    return () => {
      if (autoScroll.current) {
        clearInterval(autoScroll.current)
      }
    }
  }, [])

  const scrolling = () => {
    // setTotalScroll((prevTotalScroll) => prevTotalScroll + 1)
    totalscroll.current++
    if (totalscroll.current === 1 && imageWrapperRef.current) {
      const widthEl = (imageWrapperRef.current?.querySelector('.image-wrapper > :first-child') as HTMLElement)?.offsetWidth || 0
      imageWrapperRef.current.style.right = `${imagelength.current * (widthEl + 24)}px`
      imageWrapperRef.current.style.transition = '.3s'
    }
    if (totalscroll.current === imagelength.current + 1) {
      if (autoScroll.current) {
        clearInterval(autoScroll.current)
      }
      totalscroll.current = 1
      if (imageWrapperRef.current) {
        const widthEl = (imageWrapperRef.current?.querySelector('.image-wrapper > :first-child') as HTMLElement)?.offsetWidth || 0
        imageWrapperRef.current.style.transition = '0'
        imageWrapperRef.current.style.right = `${(imagelength.current + 1) * (widthEl + 24)}px`
        const autoScrollInterval = setInterval(scrolling, delay)
        autoScroll.current = autoScrollInterval
      }
    }
    const widthEl = (imageWrapperRef.current?.querySelector('.image-wrapper > :first-child') as HTMLElement)?.offsetWidth || 0
    if (imageWrapperRef.current) {
      console.log(imageWrapperRef.current.style.right)
      console.log(totalscroll.current)
      const right = parseInt(imageWrapperRef.current.style.right, 10)
      const moveright = widthEl + 24
      const total = +right - moveright
      imageWrapperRef.current.style.right = `${total}px`
      imageWrapperRef.current.style.transition = '.3s'
    }
    if (totalscroll.current === imagelength.current && imageWrapperRef.current) {
      imageWrapperRef.current.style.transition = '0'
    }
  }
  return (
    <div className='carousel-container'>
      <div className='image-container'>
        <div className='image-wrapper' ref={imageWrapperRef}>
          <div>
            <img src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
          </div>
          <div>
            <img src='https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
          </div>
          <div>
            <img src='https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
          </div>
          <div>
            <img src='https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
          </div>
          <div>
            <img src='https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Carousel3
