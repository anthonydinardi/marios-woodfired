import React from 'react'

interface Props {
    children: React.ReactNode,
    title: string
}

function CollapsableList({ children, title }: Props ) {
  return (
    <div className='my-6 lg:my-0'>
        <div className='text-xl mb-6'>{title}</div>
        <ul className='space-y-4'>
            {children}
        </ul>
    </div>
  )
}

export default CollapsableList