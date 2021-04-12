import React from 'react'

export default function Loading() {
  return (
    <div className='container'>
      <div class="spinner-border mt-5 mb-5" id='loading' role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
