import React, { Component } from 'react';
import Header from './component/Header/Header'
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventory : [
        
      ],
    }
  }

  componentDidMount(){
    //makes an axios request to the backend which returns data from the database in an array, res.data . Map over res.data and store in a vairable calle items. Set state inventory to items.
    axios.get("/api/inventory").then(res=>{
      let items = res.data.map((item)=>{
        return item
      })


      this.setState({inventory:items})
      console.log(res.data);
      console.log(this.state.inventory)
      
    }).catch(err=>console.log(err))
  }
  render() {
    return (
      <div className="App">
       
        <Header/>
        <Dashboard inventory = {this.state.inventory}/>
        <Form/>
      </div>
    );
  }
}

export default App;
