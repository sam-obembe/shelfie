import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component{
  // constructor(props){
  //   super(props)
  
  render(){
    
    return(
      <div>
        <h1>Dashboard</h1>
        
        {
          this.props.inventory.map((item,i)=>{
          return (
            <Product key ={i} name = {item.name} image = {item.image_url} price = {item.price}/>
            ) 
          }
          )
        }

        
      </div>
    )
  }
}

export default Dashboard