import React, {Component} from 'react'

class Form extends Component {
  constructor(){
    super()
    //data from input to be stored here
    this.state = {
      productName : "",
      price : 0,
      imageURL: ""
    }
  }

  //change handler for the name input field, arrow function used to avoid having to bind later
  nameChange = (e)=>{
    this.setState({productName:e})
    console.log(this.state.productName)
  }

  //change handler for the price input fields
  priceChange = (e)=>{
    this.setState({price:e})
    console.log(this.state.price)
  }

  //change handler for imageURL input
  urlChange = (e) =>{ this.setState({imageURL: e}) }

  //resets input fields and clears state
  cancel = (e) =>{ this.setState({imageURL:"",price:0, productName:""}) }

  render(){
    return(
      <div>
        <h1>Form</h1>

        <p>Image url:</p>
        {/* takes the urlChange function and updates state */}
        <input value = {this.state.imageURL} placeholder="image url" onChange = {e=>this.urlChange(e.target.value)}/>

        <p>Product Name:</p>
        {/* takes the nameChange function and updates state */}
        <input value = {this.state.productName} placeholder = "Product name" type= "text" onChange = {e=>this.nameChange(e.target.value)}/>

        <p>Price</p>
        {/* takes the priceChange function and updates state */}
        <input value = {this.state.price} placeholder = "price" type = "number" onChange = {e=> this.priceChange(e.target.value)}/>

        <button>Add to Inventory</button>
        <button onClick = {e=>this.cancel(e)}>Cancel</button>
      </div>
    )
  }
}

export default Form;