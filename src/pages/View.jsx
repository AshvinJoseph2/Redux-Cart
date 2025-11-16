import React, { useState } from 'react'
import Header from '../components/Header'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function View() {
  // get path parameters from url
  // const {id}= useParams()
  // console.log(id);
  // state to store product details
  // const[product,setProduct]=useState({})

  // console.log(product);
  
  // useEffect(()=>{
  //   getProductDetails()
  // },[])

  // const getProductDetails = ()=>{
  //   const allproducts = JSON.parse(sessionStorage.getItem("products"))
  //   setProduct(allProducts.find(item=>item.id=id))
  // }
  return (
    <>
    <Header/>
    <div className='container my-5'>
      <div  style={{height:"90vh"}} className='row pt-5 align-items-center'>
        <div className='col-md-6 text-center'>
          <img className='img-fluid' src="https://tse2.mm.bing.net/th/id/OIP.Y2oxV98mPTIwWJG9VbK9sQHaHa?pid=Api&P=0&h=180" alt="products" />
          <div className='d-flex justify-content-evenly mt-5'>
            <button className='btn btn-info'>ADD TO WISHLIST</button>
            <button className='btn btn-success'>ADD TO CART</button>
          </div>
        </div>
        <div className='col-md-6'>
          <h1>title</h1>
          <h2 className='text-danger'>$ price</h2>
          <h3 className='mt-2'>Brand :</h3>
          <h3>Category :</h3>
          <h4>Descrption :</h4>
          <h5 className='fw-bolder my-3'>Client Reviews</h5>
          <div className='my-5 border rounded shadow p-2'>
            <p><span className='fw-bold'>Clientname :</span>message</p>
            <p>Rating : number<FontAwesomeIcon icon={faStar} className='text-warning' /></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default View