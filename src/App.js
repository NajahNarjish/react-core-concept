import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

function App() {
  const nayoks = ['Anwar', 'Jafor', "Alomgir", "Salman"];
  const products = [
    {name:"Photoshop", price:"$10"},
    {name:"Illustrator", price:"$3"},
    {name:"PDF-reader", price:"$20"}
  ];
 
  // const productNames = products.map(product=>product.name);
  var person = {
    name: "Dr.Mahfuz",
    prof: "singer"
  }
  var style = {
    color: "red",
    backgroundColor: "yellow"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <p>My first paragraph</p>
        <h1 style={style}>my heading: {person.name +" "+ person.prof}</h1>
        {/* <Product name = {products[0].name} price = {products[0].price}></Product> */}
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        {
        products.map(pd => <Product product = {pd}></Product>)
        }

        <Person name = {nayoks.[0]} nayika = 'Diti'></Person>
        <Person1></Person1>
        <h1 style={{color: "cyan",backgroundColor: "yellow"}}>my heading: {person.name +" "+ person.prof}</h1>
        <Person name = "Rubel Nayok"></Person>
        <Person1></Person1>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
     
    </div>       
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease  = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove= {()=>setCount(count-1)}>decrease</button>
      {/* <button onClick ={handleIncrease}>Increase</button> */}
      <button onClick ={() => setCount(count + 1)}>Increase</button>

    </div>
  )
}

function Person(props){
  return (<div style = {{border:"2px solid red", margin:"10px", padding: "10px"}}>
    <h1>Name: {props.name}</h1>
    <h3>hero of the {props.nayika}</h3>
    </div>)
}

function Person1(){
  const person1Style = {
    border:"5px solid green", 
    margin:"10px", 
    padding: "10px",
    borderRadius:"50px",
  }

  return (<div style = {person1Style}>
    <h1>Name: Salman</h1>
    <h3>hero of the youtube</h3>
    </div>)
}

function Product(props){
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height:"200px",
    width:"200px",
    float:"left"
  }
  
  const {name, price} = props.product;
  return (
    <div style ={productStyle}>
      <h4>Name: {name}</h4>   
      <h6>{price}</h6>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
