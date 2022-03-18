import classNames from 'classnames'
import React from 'react'

export default function TitleSmall({className, children}) {
  return (
    <div className={classNames(
        'title-small',
        className
        )
    }
    >
        {children}
    </div>
  )
}
