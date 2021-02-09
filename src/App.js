import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
  <body>
    <div className = "light frame">
      <h3 className = "darkGreen">WELCOME TO</h3>
      <h1 className = "darkGreen">Buffer Buffet</h1>
      <div className = "row valign-wrapper">
          <p >Did you say “table for one”? Thanks for visiting Buffer Buffet! Today, we’ll be serving you a full-course meal on the concept of buffer overflow, courtesy of your favorite code chefs from Teach LA.</p>
        
      <div className = "hide-on-small-only"> <img text-align="center" src="data:image/jpeg;base64,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" alt="Couldn't Find Image" /> </div>
      </div>
    </div>
    <div className="dark frame" >

      <h3 className = "lightBlue">INTRODUCTION</h3>
      <h1 className = "lightBlue">What is buffer overflow?</h1>
      <br/>

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

    <img src="password-yo.png" alt="Couldn't Find Image"/>

    <br/>

    <p>
      Using the example above, the buffer would overflow if a user attempts
      to enter in data that exceeds the 8 bytes alloted.
    </p>

  </div>
    <div className = "light frame">
      <h3 className = "darkGreen">AN ANALOGY</h3>
      <h1 className = "darkGreen">Buffer Overflow in the Kitchen</h1>
      
          <p>To better illustrate the concept of buffer overflow, let’s cook up an analogy. Say you’re eating at a restaurant - what usually happens is that a waiter comes over, takes your order, writes it down on a notepad, then hands over these orders to the chef.</p>
        <div> <img text-align="center" src="Group 15.svg" alt="Couldn't Find Image" /> </div>
    </div>
  </body>
</div>




  );
}

export default App;
