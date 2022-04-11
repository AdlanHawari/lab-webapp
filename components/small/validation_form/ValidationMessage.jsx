import React from 'react'
import Body1 from '../typography/Body1'

export default function ValidationMessage({children}) {
  return (
    <div className="flex rounded-sm bg-error-light p-2 mt-1">
        <Body1 className="text-error-dark">
        {children}
        </Body1>
    </div>
  )
}
