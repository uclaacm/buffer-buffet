import React, { useState } from 'react'
import './App.css'
import illo from './illo.svg'
import p1 from './p1 (1).svg'
import p2 from './p2 (1).svg'
import chef from './chef.svg'

// images

//  functions
function Heading (props) {
  return (
    <div>
      <h3>{props.head1}</h3>
      <h2>{props.head2}</h2>
    </div>
  )
}

function Heading2 (props) {
  return (
    <div>
      <h2>{props.head1}</h2>
      <h3>{props.head2}</h3>
    </div>
  )
}

// frames
function Title () {
  return (
    <div className='light frame titleContainer'>
      <div>
        <Heading head1="WELCOME TO" head2="Buffer Buffet"></Heading>
        <p>
          Did you say “table for one”? Thanks for visiting Buffer Buffet! Today,
          we’ll be serving you a full-course meal on the concept of buffer
          overflow, courtesy of your favorite code chefs from Teach LA.
        </p>
      </div>
      <img id="illo" src={illo} alt="Illustration of Chef" />
    </div>
  )
}

function Introduction () {
  return (
    <div className="dark frame">
      <Heading head1="INTRODUCTION" head2="What is Buffer Overflow?"></Heading>

      <p>
        To satisfy your hunger for knowledge, we’ll start with a quick intro of
        what buffer overflow is.
      </p>

      <br />

      <h4 className="lightBlue"> Ok, so what’s a buffer?</h4>
      <p>
        <span style={{ textDecorationLine: 'underline' }}>Buffers</span> are
        areas of memory set aside to hold data temporaily as it is being
        transferred from one region to another. It can hold anything from
        character strings to arrays of integers. As is in memory systems or
        programs, the sizes of these buffers are typically well-defined.
      </p>
      <p>
        For example, a program could contain a 8-byte buffer for a user to enter
        their password.
      </p>

      <div>
        {' '}
        <img className="password" src={p1} alt="Buffer Example Password" />{' '}
      </div>

      <h4 className="lightBlue">How do buffers overflow?</h4>
      <p>
        <span style={{ textDecorationLine: 'underline' }}>Buffer overflow</span>{' '}
        happens when a program attempts to input more data in a buffer than it
        can hold. As a result, the program ends up going past the buffer&#39;s
        boundary and overwrites adjacent memory locations.
      </p>

      <br />

      <img className="password" src={p2} alt="Buffer Overflow Password" />

      <br />

      <p>
        Using the example above, the buffer would overflow if a user attempts to
        enter in data that exceeds the 8 bytes alloted.
      </p>

    </div>
  )
}

function Transition () {
  return (
    <div className="light frame">
      <Heading
        head1="AN ANALOGY"
        head2="Buffer Overflow in the Kitchen"
      ></Heading>
      <div className="transitionContainer">
        <img id="chef" src={chef} alt="Illustration of Chef" />
        <p id="chefText">
          To better illustrate the concept of buffer overflow, let’s cook up an
          analogy. Say you’re eating at a restaurant - what usually happens is
          that a waiter comes over, takes your order, writes it down on a
          notepad, then hands over these orders to the chef.
        </p>
      </div>
    </div>
  )
}

function SmallTransition (props) {
  return (
    <div className="light frame">
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  )
}

// INTERACTIVE FRAME
function Interactive (props) {
  const [orders, setOrders] = useState([
    //  made orders into a state variable
    ['Chicken Wings', 'Apple Pie'],
    ['Pancakes', 'Grilled Cheese'],
    ['Apple Pie', ''],
    ['Caesar Salad', 'Grilled Cheese'],
    ['Chicken Wings', 'Caesar Salad']
  ])

  function OrderItem (props) {
    return (
      <div className="OrderItem" style = {{ backgroundColor: props.color }}>
        <p style={{ fontWeight: 600 }}>Order {props.num}</p>
        <p>{props.items[0]}</p>
        <p>{props.items[1]}</p>
      </div>
    )
  }

  function Orders () {
    return (
      <div className="Orders">
        <h3 className="OrderTitle">ORDERS</h3>
        <div className="OrderContainer">
          <div className="empty">
            <p className="question">?</p>
          </div>
          {(orders.slice(0, 5)).map((order, i) => {
            //  like the menuItems, we should use "map" to systematically create the React components
            let color = '#F3D5FE'
            if (orders.length - i < 6) color = '#E1FEF7'
            return <OrderItem key={i} num={String(orders.length - i)} items={order} color = {color}/>
          })}
        </div>
      </div>
    )
  }

  const menu = [
    'Chicken Wings',
    'Apple Pie',
    'Pancakes',
    'Grilled Cheese',
    'Caesar Salad'
  ]

  const [menuChecked, setMenuChecked] = useState([
    false,
    false,
    false,
    false,
    false
  ])

  const [error, setError] = useState([null])

  function MenuItem (props) {
    return (
      <div className="MenuItem">
        <label className="container">
          {' '}
          {props.item}
          <input
            type="checkbox"
            checked={menuChecked[props.index]} //  use appropriate value from "menuChecked" array
            onChange={(e) => {
              console.log('checkbox changed')
              const newMenuChecked = [...menuChecked] //  make a copy of "menuChecked"
              newMenuChecked[props.index] = e.target.checked //  change the target element
              setMenuChecked(newMenuChecked) //  update the state with the new array
              console.log(newMenuChecked)

              console.log(props.restriction)
              if (props.restriction) {
                console.log('restricted to two')
                //  show error message if more than two
                let totalCheck = 0
                for (let i = 0; i < newMenuChecked.length; i++) {
                  if (newMenuChecked[i]) {
                    totalCheck++
                  }
                }
                console.log('total check: ' + totalCheck)
                if (totalCheck > 2) {
                  setError('You may only choose two.')
                } else {
                  setError(null)
                }
              }
            }
          }
          />
          <span className="checkmark"></span>
        </label>
      </div>
    )
  }

  //  used "map" to systematically create one MenuItem for each item in the "menu" array
  //  note: this lets us include an index for each item without hard-coding it
  const menuItems = menu.map((item, i) => {
    return <MenuItem key={item} item={item} index={i} restriction = {props.restriction}/>
  })

  function Menu (props) {
    function ReadOrder () {
      console.log("read order's restriction: " + props.restriction)
      const newOrders = [...orders] //  make a copy of orders to manipulate
      let checkedItems = []

      // find total checked
      let totalChecked = 0
      for (let i = 0; i < menu.length; i++) {
        if (menuChecked[i]) {
          totalChecked++
        }
      }

      console.log(props.restriction)
      // if total checked > restriction, then show an error message
      if (totalChecked > 2 && props.restriction) {
        console.log('pick only two!')
      } else {
        for (let i = 0; i < menu.length; i++) {
          if (menuChecked[i]) {
            //  we should check our "menuChecked" state instead of trying to access the page elements
            checkedItems.push(menu[i])
            if (checkedItems.length === 2) {
              newOrders.unshift(checkedItems)
              checkedItems = []
            }
          }
        }
        if (checkedItems.length === 1) {
          checkedItems.push('')
          newOrders.unshift(checkedItems)
        }
        setOrders(newOrders) //  update the orders once we're done processing
      }
    }

    console.log("menu's restriction: " + props.restriction)
    return (
      <div className="Menu center">
        <h3 className="MenuTitle">MENU</h3>
        {menuItems}
        <h4 className = "error">{error}</h4>
        <button className = "submitButton" onClick={ReadOrder}>Submit</button>
      </div>
    )
  }

  return (
    <div className="dark frame">
      <Heading2 head1={props.head1} head2={props.head2}></Heading2>
      <div className="interactive">
        <Menu restriction={props.restriction}></Menu>
        <Orders arr={props.arr}></Orders>
      </div>
    </div>
  )
}

function App () {
  return (
    <div className="App">
      <Title />
      <Introduction />
      <Transition />
      <Interactive
        head1="Make some orders"
        head2="PICK 2 THINGS OFF THE MENU"
        restriction = {true}
      ></Interactive>
      <SmallTransition
        heading="Now let's cause a buffer overflow..."
        text=""
      ></SmallTransition>
      <Interactive
        head1="Make a long order"
        head2="PICK 3 OR MORE THINGS OFF THE MENU"
        restriction = {false}
      ></Interactive>
      <SmallTransition
        heading="That's Buffer Overflow!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing enim eu. Lacinia quis vel eros donec ac odio tempor orci dapibus. Now try it with code!"
      ></SmallTransition>
    </div>
  )
}

export default App
