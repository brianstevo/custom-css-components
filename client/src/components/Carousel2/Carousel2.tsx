import React, { ReactNode, useEffect, useRef, useState } from 'react'
import './Carousel.css'

export interface CarouselProps {
  images?: string[]
  smIemsPerView?: 1 | 2
  mdItemsPerView?: 1 | 2
  lgitemsPerView?: number
  delay?: number
  autoPlay?: boolean
  autoPlayDirection: 'left' | 'right'
}

const Carousel2 = ({ images, smIemsPerView = 1, mdItemsPerView = 1, lgitemsPerView = 2, delay = 2000, autoPlay = true, autoPlayDirection = 'left' }: CarouselProps) => {
  const imageWrapperRef = useRef<HTMLDivElement>(null)
  let imageLength = useRef<number>(0)
  let imageItems = useRef<HTMLElement[]>([])
  let totalScroll = useRef<number>(0)
  const autoScroll = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    imageItems.current = Array.from(imageWrapperRef.current?.querySelectorAll('.image-wrapper > *') || [], (el) => el as HTMLElement)
    imageLength.current = imageItems.current.length
    if (imageWrapperRef.current) {
      imageWrapperRef.current.style.setProperty('--per-sm-view', String(smIemsPerView))
      imageWrapperRef.current.style.setProperty('--per-md-view', String(mdItemsPerView))
      imageWrapperRef.current.style.setProperty('--per-lg-view', String(lgitemsPerView))
      for (let i = 0; i < lgitemsPerView; i++) {
        if (imageItems.current[i]) {
          imageWrapperRef.current.insertAdjacentHTML('beforeend', imageItems.current[i].outerHTML)
        }
      }
      if (autoPlay) {
        let autoScrollInterval
        autoPlayDirection === 'left' ? (autoScrollInterval = setInterval(leftScrolling, delay)) : (autoScrollInterval = setInterval(rightScrolling, delay))
        autoScroll.current = autoScrollInterval
      }
    }

    return () => {
      if (autoScroll.current) {
        clearInterval(autoScroll.current)
      }
    }
  }, [])

  const leftScrolling = () => {
    totalScroll.current++
    if (totalScroll.current === imageLength.current + 1) {
      if (autoScroll.current) {
        clearInterval(autoScroll.current)
      }
      totalScroll.current = 1
      updateLeftPosition(0, 0)
      if (imageWrapperRef.current) {
        const autoScrollInterval = setInterval(leftScrolling, delay)
        autoScroll.current = autoScrollInterval
      }
    }
    updateLeftPosition(0.3, totalScroll.current)
  }

  const rightScrolling = () => {
    if (totalScroll.current === 0) {
      updateLeftPosition(0, imageLength.current)
    }
    if (totalScroll.current !== 0) {
      updateLeftPosition(0.3, totalScroll.current - 1)
    }
    if (totalScroll.current === 0) {
      updateLeftPosition(0.3, imageLength.current - 1)
      totalScroll.current = 4
    } else {
      totalScroll.current--
    }
  }

  const handleNext = () => {
    totalScroll.current++
    if (totalScroll.current === imageLength.current + 1) {
      totalScroll.current = 1
      updateLeftPosition(0, 0)
    }
    updateLeftPosition(0.3, totalScroll.current)
  }
  const handlePrevious = () => {
    if (totalScroll.current === 0) {
      updateLeftPosition(0, imageLength.current)
    }
    if (totalScroll.current !== 0) {
      updateLeftPosition(0.3, totalScroll.current - 1)
    }
    if (totalScroll.current === 0) {
      updateLeftPosition(0.3, imageLength.current - 1)
      totalScroll.current = 4
    } else {
      totalScroll.current--
    }
  }
  const updateLeftPosition = (transitionTime: number, CountForPositionCalculation: number) => {
    if (imageWrapperRef.current) {
      const widthEl = (imageWrapperRef.current?.querySelector('.image-wrapper > :first-child') as HTMLElement)?.offsetWidth || 0
      imageWrapperRef.current.style.transition = `${transitionTime}s`
      imageWrapperRef.current.style.left = `-${CountForPositionCalculation * (widthEl + 24)}px`
    }
  }
  return (
    <div className='carousel-container'>
      <button onClick={handlePrevious}>prev</button>
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
      <button onClick={handleNext}>next</button>
    </div>
  )
}
export default Carousel2

// const handlePrevious = () => {
//   console.log(imageWrapperRef.current?.style.left)
//   console.log(totalscroll.current)
//   if (totalscroll.current === 0 && imageWrapperRef.current) {
//     imageWrapperRef.current.style.transition = '0s'
//     const widthEl = (imageWrapperRef.current?.querySelector('.image-wrapper > :first-child') as HTMLElement)?.offsetWidth || 0
//     imageWrapperRef.current.style.left = `-${(imagelength.current - 1) * (widthEl + 24)}px`
//     totalscroll.current = 5
//     return
//   }
//   // if (totalscroll.current === 1 && imageWrapperRef.current) {
//   //   const widthEl = (imageWrapperRef.current?.querySelector('.image-wrapper > :first-child') as HTMLElement)?.offsetWidth || 0
//   //   imageWrapperRef.current.style.transition = '.3s'
//   //   imageWrapperRef.current.style.left = `-${imagelength.current * (widthEl + 24)}px`
//   //   totalscroll.current = 5
//   //   return
//   // }
//   // if (totalscroll.current === 2) {
//   //   if (imageWrapperRef.current) {
//   //     const widthEl = (imageWrapperRef.current?.querySelector('.image-wrapper > :first-child') as HTMLElement)?.offsetWidth || 0
//   //     imageWrapperRef.current.style.transition = '.3s'
//   //     imageWrapperRef.current.style.left = `-${imagelength.current * (widthEl + 24)}px`
//   //   }
//   //   console.log(imageWrapperRef.current?.style.left)
//   //   console.log(totalscroll.current)
//   //   totalscroll.current--
//   //   return
//   // }

//   if (totalscroll.current === imagelength.current + 1) {
//     // if (autoScroll.current) {
//     //   clearInterval(autoScroll.current)
//     // }
//     totalscroll.current = 1
//     if (imageWrapperRef.current) {
//       imageWrapperRef.current.style.transition = '0s'
//       imageWrapperRef.current.style.left = '0'
//       // const autoScrollInterval = setInterval(scrolling, delay)
//       // autoScroll.current = autoScrollInterval
//     }
//   }
//   // const widthEl = (imageWrapperRef.current?.querySelector('.image-wrapper > :first-child') as HTMLElement)?.offsetWidth || 0
//   // if (imageWrapperRef.current) {
//   //   imageWrapperRef.current.style.left = `-${totalscroll.current * (widthEl + 24)}px`
//   //   imageWrapperRef.current.style.transition = '.3s'
//   // }
//   if (imageWrapperRef.current) {
//     const widthEl = (imageWrapperRef.current.querySelector('.image-wrapper > :first-child') as HTMLElement)?.offsetWidth || 0
//     imageWrapperRef.current.style.left = `-${(totalscroll.current - 1) * (widthEl + 24)}px`
//     imageWrapperRef.current.style.transition = '.3s'
//     totalscroll.current--
//     // setAutoScroll(setInterval(scrolling, delay));
//   }
// }

/**
 * 
 *   const scrolling = () => {
    // setTotalScroll((prevTotalScroll) => prevTotalScroll + 1)
    totalscroll.current++
    if (totalscroll.current === imagelength.current + 1) {
      if (autoScroll.current) {
        clearInterval(autoScroll.current)
      }
      totalscroll.current = 1
      if (imageWrapperRef.current) {
        imageWrapperRef.current.style.transition = '0s'
        imageWrapperRef.current.style.left = '0'
        const autoScrollInterval = setInterval(scrolling, delay)
        autoScroll.current = autoScrollInterval
      }
    }
    const widthEl = (imageWrapperRef.current?.querySelector('.image-wrapper > :first-child') as HTMLElement)?.offsetWidth || 0
    if (imageWrapperRef.current) {
      imageWrapperRef.current.style.left = `-${totalscroll.current * (widthEl + 24)}px`
      imageWrapperRef.current.style.transition = '.3s'
    }
  }

  const handleNext = () => {
    totalscroll.current++
    if (totalscroll.current === imagelength.current + 1) {
      totalscroll.current = 1
      if (imageWrapperRef.current) {
        imageWrapperRef.current.style.transition = '0s'
        imageWrapperRef.current.style.left = '0'
      }
    }
    const widthEl = (imageWrapperRef.current?.querySelector('.image-wrapper > :first-child') as HTMLElement)?.offsetWidth || 0
    if (imageWrapperRef.current) {
      imageWrapperRef.current.style.left = `-${totalscroll.current * (widthEl + 24)}px`
      imageWrapperRef.current.style.transition = '.3s'
    }
    console.log(imageWrapperRef.current?.style.left)
    console.log(totalscroll.current)
  }
  const handlePrevious = () => {
    if (totalscroll.current === 0 && imageWrapperRef.current) {
      const widthEl = (imageWrapperRef.current?.querySelector('.image-wrapper > :first-child') as HTMLElement)?.offsetWidth || 0
      console.log(imagelength.current * (widthEl + 24))
      imageWrapperRef.current.style.transition = '0s'
      imageWrapperRef.current.style.left = `-${imagelength.current * (widthEl + 24)}px`
    }

    if (totalscroll.current !== 0 && imageWrapperRef.current) {
      const widthEl = (imageWrapperRef.current.querySelector('.image-wrapper > :first-child') as HTMLElement)?.offsetWidth || 0
      imageWrapperRef.current.style.left = `-${(totalscroll.current - 1) * (widthEl + 24)}px`
      imageWrapperRef.current.style.transition = '.3s'
    }
    if (totalscroll.current === 0) {
      totalscroll.current = 4
      if (imageWrapperRef.current) {
        const widthEl = (imageWrapperRef.current?.querySelector('.image-wrapper > :first-child') as HTMLElement)?.offsetWidth || 0
        imageWrapperRef.current.style.transition = '.3s'
        imageWrapperRef.current.style.left = `-${(imagelength.current - 1) * (widthEl + 24)}px`
      }
    } else {
      totalscroll.current--
    }

    console.log(imageWrapperRef.current?.style.left)
    console.log(totalscroll.current)
  }
 */
