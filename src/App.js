import React from 'react';
import './App.css';
import illo from './illo.svg';


//images

//functions
function Heading(props) {
  return (
    <div>
      <h3>{props.head1}</h3>
      <h1>{props.head2}</h1>
    </div>
  );
}

//frames
function Title() {
  return(
    <div className = "light frame">
        <Heading head1="WELCOME TO" head2="Buffer Buffet" ></Heading>
        <p>Did you say “table for one”? Thanks for visiting Buffer Buffet! Today, we’ll be serving you a full-course meal on the concept of buffer overflow, courtesy of your favorite code chefs from Teach LA.</p>
        <img text-align="center" src={illo} alt="Couldn't Find Image" />
      </div>
  );
}

function Introduction() {
  return(
    <div className = "dark frame">
        <Heading head1="INTRODUCTION" head2="What is Buffer Overflow?"></Heading>
        <p>
      To satisfy your hunger for knowledge, we’ll start with a quick intro
      of what buffer overflow is.
    </p>

    <br/>

    <h4 className = "lightBlue"> Ok, so what’s a buffer?</h4>
    <p>
      <span style = {{textDecorationLine: 'underline'}}>Buffers</span> are areas of memory set aside to hold data temporaily as it is
      being transferred from one region to another. It can hold anything
      from character strings to arrays of integers. As is in memory systems
      or programs, the sizes of these buffers are typically well-defined.
    </p>
    <p>
      For example, a program could contain a 8-byte buffer for a user to
      enter their password.
    </p>

    <div> <img text-align="center" src="password.png" alt="Couldn't Find Image" /> </div>

    <h4 className = "lightBlue">How do buffers overflow?</h4>
    <p>
    <span style = {{textDecorationLine: 'underline'}}>Buffer overflow</span> happens when a program attempts to input more data in
      a buffer than it can hold. As a result, the program ends up going past
      the buffer's boundary and overwrites adjacent memory locations.
    </p>

    <br/>

    <img src="" alt="Couldn't Find Image"/>

    <br/>

    <p>
      Using the example above, the buffer would overflow if a user attempts
      to enter in data that exceeds the 8 bytes alloted.
    </p>

    </div>
  );
}

function Transition() {
  return(
    <div className = "light frame">
        <Heading head1="AN ANALOGY" head2="Buffer Overflow in the Kitchen" ></Heading>
        <p>To better illustrate the concept of buffer overflow, let’s cook up an analogy. Say you’re eating at a restaurant - what usually happens is that a waiter comes over, takes your order, writes it down on a notepad, then hands over these orders to the chef.</p>
        <img text-align="center" src="" alt="Couldn't Find Image" />
      </div>
  );
}

function App() {
  return (
    <div className="App">
      <Title/>
      <Introduction/> 
      <Transition/>
      
  {/*<body>
    
  </div>
    <div className = "light frame">
      <h3 className = "darkGreen">AN ANALOGY</h3>
      <h1 className = "darkGreen">Buffer Overflow in the Kitchen</h1>
      
         
    </div>
  </body>*/}
  </div>
  );
}

export default App;
