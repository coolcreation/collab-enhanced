import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
     
     <nav class="navbar navbar-dark navbar-expand-lg bg-dark px-2 px-lg-3 py-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src={'/vite.svg'} alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarText">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                <li class="nav-item ms-lg-auto">
                   <Link className="nav-link" to="/HomePage">Home</Link>
                </li>
               
    
               <li class="nav-item">
                  <Link className="nav-link" to="/ContactPage">Contact</Link>
               </li>
        
               {/* <li><Link className="dropdown-item" to="/PaintDetailsPage">Paint Details</Link></li> */}

                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
            </ul>

            </div>
        </div>
     </nav>


    </div>

  )
}