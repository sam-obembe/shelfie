import React from 'react'

function Product(props){
  return(
    <div>
      <h3>{props.name}</h3>
      <img src = {props.image} width="200px" alt = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtRy2m6ij7FzuThTD0kV0bcslP93RCy0TbODLMyktODZIbbYv9A"/>
      <p> ${props.price} </p>
    </div>
  )
}

export default Product