import React, { Component } from 'react'
import "./todoapp.css";

export default class Todoapp extends Component {
  state={
    input:"",
    items:[]

  }
  handleChange =event=>{
    this.setState({
      input:event.target.value
    })
   
  }
 
  storeItem=event=>{
    event.preventDefault();
    const {input}=this.state
    this.setState({
      items:[...this.state.items,input],
      input:""
    })
    

  }
   deleteItem=key=>{
    this.setState({
      items:this.state.items.filter((data,index)=>index !== key)
    })
  }
  render() {
    const {input,items}=this.state
    
    return (
      <div className='todo-container'>
       
        <form className="input-section" onSubmit={this.storeItem}> 
          <h1>Todo app</h1>
          <input type="text" placeholder='enter items...'value={input} onChange={this.handleChange}/>
          
        </form>
        <ul>
          {items.map((data,index)=>(
            <li key={index}>{data} <i className="fa-solid fa-trash" onClick={()=>this.deleteItem(index)}></i></li>
          ))}
        </ul>
      </div>
    )
  }
}
