import React, { ReactNode, useMemo } from 'react'
import './Pagination.css'

export interface PaginationProps {
  totalCount: number
  currentPage: number
  pageSize: number
  onPageChange?: any
  siblingCount?: number
  className?: string
}

// const Pagination = ({ totalCount, currentPage = 1, pageSize, onPageChange, siblingCount = 1, className = '', children }: PaginationProps) => {
//   return <div className={`${style['flex-container']} ${className}`}>{children}</div>
// }

// export default Pagination

const Pagination = ({ totalCount, currentPage = 1, pageSize, onPageChange, siblingCount = 1, className = '' }: PaginationProps) => {
  const paginationRange: (string | number)[] | undefined = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  })

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }
  const onLargerNext = () => {
    onPageChange(currentPage + 5)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const onLargerPrevious = () => {
    onPageChange(currentPage - 5)
  }

  let lastPage = paginationRange ? paginationRange[paginationRange.length - 1] : 0
  return (
    <ul className={`pagination-container ${className}`}>
      {/* Left navigation arrow */}
      <li className={currentPage === 1 ? 'pagination-arrow-item pagination-arrow-right disabled' : 'pagination-arrow-item pagination-arrow-right'} onClick={onPrevious}>
        <div className='arrow left' />
      </li>
      <li className={currentPage < 6 ? 'pagination-arrow-item pagination-arrow-right disabled' : 'pagination-arrow-item pagination-arrow-right'} onClick={onLargerPrevious}>
        <div className='arrow left' />
        <div className='arrow left' />
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === '...') {
            return <li className='pagination-item dots'>&#8230;</li>
          }

          // Render our Page Pills
          return (
            <li className={pageNumber === currentPage ? 'pagination-item  selected' : 'pagination-item'} onClick={() => onPageChange(pageNumber)}>
              {pageNumber}
            </li>
          )
        })}
      {/*  Right Navigation arrow */}
      <li className={currentPage > +lastPage - 5 ? 'pagination-arrow-item pagination-arrow-left disabled' : 'pagination-arrow-item pagination-arrow-left'} onClick={onLargerNext}>
        <div className='arrow right' />
        <div className='arrow right' />
      </li>
      <li className={currentPage === lastPage ? 'pagination-arrow-item pagination-arrow-left disabled' : 'pagination-arrow-item pagination-arrow-left'} onClick={onNext}>
        <div className='arrow right' />
      </li>
    </ul>
  )
}

export default Pagination

export const usePagination = ({ totalCount = 0, pageSize = 7, siblingCount = 1, currentPage }: PaginationProps) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)
    const DOTS = '...'
    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount
      let leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)
      return [firstPageIndex, DOTS, ...rightRange]
    }

    /*
    	Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [totalCount, pageSize, siblingCount, currentPage])

  return paginationRange
}

const range = (start: number, end: number) => {
  let length = end - start + 1
  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start)
}
