import React from 'react'
import "./loading.css"

export default function Loading() {
  return (
    <div className="loading-box">
      <div className="circles">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <p>Loading...</p>
    </div>
  )
}
