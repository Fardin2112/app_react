import React from 'react'

export default function Footer(props) {
  return (
    <div className='row'>
      <button className='btn btn-danger'>Reset</button>
      <div>
        {props.TotalAmount}
      </div>
      <button className='pay-btn'>Pay Now</button>
    </div>
  )
}
