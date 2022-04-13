import classNames from 'classnames'
import React from 'react'
import Body1 from '../typography/Body1'

export default function ValidationMessage({children, className}) {
  return (
    <div className={classNames("flex rounded-sm bg-error-light p-2 mt-1",
    className
    )}>
        <Body1 className="text-error-dark">
        {children}
        </Body1>
    </div>
  )
}
