import React from 'react'
import './SplitLayout.scss'

type SplitLayoutProps = {
  children: React.ReactNode
}

export default function SplitLayout ({children}: SplitLayoutProps) {
  return <div className='split-layout'>{children}</div>
}