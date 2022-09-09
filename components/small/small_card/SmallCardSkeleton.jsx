import React from 'react'

export default function SmallCardSkeleton() {
  return (
    <div className="animate-pulse block h-80 w-full border border-cardStrokes rounded-2xl p-5 space-y-5 bg-white">
        <div className="relative h-8 w-1/2 bg-grey-300 rounded-xl"></div>
        <div className="relative h-4 w-2/5 bg-grey-300 rounded-xl"></div>
        <div className="relative h-3 w-2/5 bg-grey-300 rounded-xl"></div>
        <div className="flex space-x-28">
            <div className="relative h-3 w-20 bg-grey-300 rounded-xl"></div>
            <ul className='w-52 space-y-6'>
                <li className='h-3 bg-grey-300 rounded-xl'></li>
                <li className='h-3 bg-grey-300 rounded-xl'></li>
                <li className='h-3 bg-grey-300 rounded-xl'></li>
                <li className='h-3 bg-grey-300 rounded-xl'></li>
            </ul>
        </div>
    </div>
  )
}