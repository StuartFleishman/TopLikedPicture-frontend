import React, { useState } from 'react'
import { connect } from "react-redux"
import {logoutAdmin} from './actions/adminAction'
import { useHistory } from 'react-router-dom'
import {createProduct} from './actions/productsAction'
import {firebaseApp, storage} from './firebase'


function AdminHome(props) {
  
  let history = useHistory()

  const [productInput, setProductInput] = useState({
    name: "", description: "", price: "", quantity: ""
  })

  const [image, setImage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const uploadPicture = storage.ref(`images/${productInput.name}`).put(image)
    uploadPicture.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error)
      },
      () => {
        storage
          .ref("images")
          .child(productInput.name)
          .getDownloadURL()
          .then(url => {
            const productRef = firebaseApp.database().ref("product")
            const product = {...productInput, image: url}
            productRef.push(product)
            history.push('/')
          })
        }
      )
    }


  
  return (
    <div>
   
      <>
      <button onClick={() => props.logoutAdmin(history)}>LogOut</button>
      <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1 style={{color: "white", textAlign: "center"}}>Create Product</h1>
        <br></br>
        <label style={{color: "white"}}>Product Name</label>
        <input type="text" value={productInput.name} onChange={(e) => setProductInput({...productInput, name: e.target.value}) } />
        <label style={{color: "white"}}>Description</label>
        <input type="textarea" value={productInput.description} onChange={(e) => setProductInput({...productInput, description: e.target.value}) } />
        <label style={{color: "white"}}>Price</label>
        <input type="number" min="0" step=".01" value={productInput.price} onChange={(e) => setProductInput({...productInput, price: e.target.value}) } />
        <label style={{color: "white"}}>Quantity</label>
        <input type="number" value={productInput.quantity} onChange={(e) => setProductInput({...productInput, quantity: e.target.value}) } />
        <label style={{color: "white"}}>Image</label>
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
