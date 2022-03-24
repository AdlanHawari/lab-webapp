import classNames from 'classnames'
import React from 'react'

export default function QuickFilterSmaller({className, children}) {
  return (
    <button className= {classNames(
        "block py-0.5 px-2.5 rounded-md border border-grey-300 button-small leading-normal ",
        className
    )}
    >
        {children}
    </button>
  )
}
