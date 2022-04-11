import classNames from 'classnames'
import React from 'react'

export default function QuickFilterButton({
  className,
  onClick,
  children
}) {
  return (
    <button className= {classNames(
        "block p-2.5 rounded-md border border-grey-300 button-small leading-normal ",
        className
    )}
    onClick={onClick}
    >
        {children}
    </button>
  )
}
