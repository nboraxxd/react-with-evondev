import React from 'react'
import './LoadingSkeleton.scss'

const LoadingSkeleton = ({ width, height, borderRadius, className }) => {
  return <div className={`skeleton ${className}`} style={{ width, height, borderRadius }}></div>
}

export default LoadingSkeleton
