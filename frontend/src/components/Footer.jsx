import React from 'react'

export default function Footer() {
  return (
    <div className='footer bg-dark d-flex flex-column flex-lg-row py-4 gap-4'>

       <div className='col-11 col-lg-5 mx-auto d-flex align-items-center justify-content-center'>
        <ul className='nav flex-column'>
                <li className='text-white'>Home</li>
                <li className='text-white'>Contact</li>
                <li className='text-white'>About</li>
            </ul>
       </div>

       <div className='col-11 col-lg-5 mx-auto text-success d-flex align-items-center justify-content-center'>Collab Enhanced @ 2025</div>

    </div>
  )
}
