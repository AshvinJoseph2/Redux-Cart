import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
    <div style={{height:"80vh"}} className='d-flex justify-content-center align-items-center flex-column'>
     <img className='img-fluid' src="https://tse3.mm.bing.net/th/id/OIP.K8wfQkLaK6TYFIl7an4QrQHaDI?pid=Api&P=0&h=180" alt="page not found" />
     <h4 className='my-4'>Look like you lost!!!</h4>
     <p>The page your looking for is not available</p>
     <Link to={'/'} className='btn btn-success'>Home</Link>
    </div>
  )
}

export default Pnf