import React, { useState } from 'react'
import { connect } from "react-redux"
import {logoutAdmin} from './actions/adminAction'
import { useHistory } from 'react-router-dom'
import {createProduct} from './actions/productsAction'



function AdminHome(props) {
  
  let history = useHistory()

  const [productInput, setProductInput] = useState({
    name: "", description: "", price: "", quantity: ""
  })

  const [image, setImage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', productInput.name);
    formData.append('description', productInput.description);
    formData.append('image_url', image);
    formData.append('price', productInput.price);
    formData.append('quantity', productInput.quantity);

    // props.createProduct(formData, history)

    

    
  }


  
  return (
    <div>
   
      <>
      <button onClick={() => props.logoutAdmin(history)}>LogOut</button>
      <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Add Product</h1>
        <br></br>
        <label>Product Name</label>
        <input type="text" value={productInput.name} onChange={(e) => setProductInput({...productInput, name: e.target.value}) } />
        <label>Description</label>
        <input type="textarea" value={productInput.description} onChange={(e) => setProductInput({...productInput, description: e.target.value}) } />
        <label>Price</label>
        <input type="number" min="0" step=".01" value={productInput.price} onChange={(e) => setProductInput({...productInput, price: e.target.value}) } />
        <label>Quantity</label>
        <input type="number" value={productInput.quantity} onChange={(e) => setProductInput({...productInput, quantity: e.target.value}) } />
        <label>Image</label>
        <input type="file"  onChange={(e) => setImage(e.target.files[0]) } />
        <br></br>
        <input type="submit" value="submit" />
      </form>
      </div>
      </>
    
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
   admin: state.admin.loggedIn
  }
}


export default connect(mapStateToProps, {logoutAdmin, createProduct})(AdminHome)
