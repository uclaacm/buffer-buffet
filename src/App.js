/* eslint-disable */
import React, { useState } from 'react'
// import Scrollspy from 'react-scrollspy'
import './App.css'
import illo from './illo.svg'
import p1 from './p1 (1).svg'
import p2 from './p2 (1).svg'
import chef from './chef.svg'

// to do: style scrollspy, resize, tiny scroll(s)

// frames
function Title (props) {
  return (
    <div className='light frame titleContainer'>
      <div>
        <h1 id="section-1">Buffer Buffet</h1>
        <p>
          Did you say “table for one”? Thanks for visiting Buffer Buffet! Today,
          we’ll be serving you a full-course meal on the concept of buffer
          overflow, courtesy of your favorite code chefs from Teach LA.
        </p>
        <button className = "nextBtn" onClick= {() => {
          props.setPage(2)
        }}>Let&apos;s get cooking!</button>
      </div>
      <img id="illo" src={illo} alt="Illustration of Chef" />
    </div>
  )
}

function Introduction (props) {
  const dropdownDefault1 =
    (
  <div>
<p style={{ fontWeight: 'lighter' }}>
  <span style={{ textDecorationLine: 'underline' }}>Buffers</span> are
  areas of memory set aside to hold data temporarily as it is being
  transferred from one region to another. It can hold anything from
  character strings to arrays of integers. As is in memory systems or
  programs, the sizes of these buffers are typically well-defined.
</p>
<p style={{ fontWeight: 'lighter' }}>
  For example, a program could contain a 8-byte buffer for a user to enter
  their password.
</p>
<br/>
<img className="password" src={p1} alt="Buffer Example Password" />
    </div>
    )

  const dropdownDefault2 =
    (<div>
      <p style={{ fontWeight: 'lighter' }}>
        <span style={{ textDecorationLine: 'underline' }}>Buffer overflow</span>{' '}
        happens when a program attempts to input more data in a buffer than it
        can hold. As a result, the program ends up going past the buffer&#39;s
        boundary and overwrites adjacent memory locations.
      </p>

      <br />

      <img className="password" src={p2} alt="Buffer Overflow Password" />

      <br />

      <p style={{ fontWeight: 'lighter' }}>
        Using the example above, the buffer would overflow if a user attempts to
        enter in data that exceeds the 8 bytes alloted.
      </p>
    </div>
    )

  const [show1, switch1] = useState([false])
  const [show2, switch2] = useState([false])

  console.log('show1: ' + show1)
  console.log('show2: ' + show2)

  return (
    <div className="dark frame long">
      <div className = "heading">
        <h3 className = "squish">INTRODUCTION</h3>
        <h2 className = "lightBlue">What is buffer overflow?</h2>
      </div>

      <p style={{ fontWeight: 'lighter' }}>
        To satisfy your hunger for knowledge, we’ll start with a quick intro of
        what buffer overflow is.
      </p>

      <h4> Ok, so what’s a buffer? <span className = "dropdown " onClick = {() => {
        switch1(!show1)
      }}>
        {!show1 ? '▲' : '▼'}
      </span> </h4>
      <hr/>
      {show1 ? '' : dropdownDefault1}

      <h4 className="lightBlue">How do buffers overflow? <span className = "dropdown" onClick = {() => {
        switch2(!show2)
      }}>{!show2 ? '▲' : '▼'}</span></h4>
      <hr/>
      {show2 ? '' : dropdownDefault2}
      <br/>
      <button className = "nextBtn greenBtn" onClick= {() => {
        props.setPage(3)
      }}>Continue</button>
    </div>
  )
}

function Transition (props) {
  return (
    <div className="light frame">
      {/* <Heading
        head1="AN ANALOGY"
        head2="Buffer Overflow in the Kitchen"
      ></Heading> */}
       <div className = "heading chefHead">
        <h3 className = "squish">AN ANALOGY</h3>
        <h2 className = "darkGreen">Buffer Overflow in the Kitchen</h2>
      </div>
      <div className = "transitionContainer">
        <img id="chef" src={chef} alt="Illustration of Chef" />
        <p id="chefText">
          To better illustrate the concept of buffer overflow, let’s cook up an
          analogy. Say you’re eating at a restaurant - what usually happens is
          that a waiter comes over, takes your order, writes it down on a
          notepad, then hands over these orders to the chef.
        </p>
        <button className = "nextBtn chefBtn" onClick= {() => {
          props.setPage(4)
        }}>Continue</button>
      </div>
    </div>
  )
}

function SmallTransition (props) {
  return (
    <div className="light frame">
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
      <br/>
      <button className = "nextBtn transitionBtn" onClick= {() => {
        { props.page === 5 ? props.setPage(6) : props.setPage(8) }
      }}>{props.btn}</button>
    </div>
  )
}

// INTERACTIVE FRAME
function Interactive (props) {
  const [orders, setOrders] = useState([
    //  made orders into a state variable
    ['Ice Cream', 'Apple Pie'],
    ['Pancakes', 'Pizza'],
    ['Apple Pie', ''],
    ['Hot Dog', 'Pasta'],
    ['Ice Cream', 'Hot Dog']
    // ['Apple Pie'],
    // ['Pizza', 'Hot Dog']
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
        <h3 className="interactiveTitle">ORDERS</h3>
        <div className="OrderContainer">
          <div className="empty">
            <p className="question">?</p>
          </div>
          {(orders.slice(0, 7)).map((order, i) => {
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
    'Ice Cream',
    'Apple Pie',
    'Pancakes',
    'Pasta',
    'Hot Dog',
    'Pizza'
  ]

  const [menuChecked, setMenuChecked] = useState([
    false,
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
          <div className = "item">{props.item}</div>
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

        //  reset checks
        setMenuChecked([
          false,
          false,
          false,
          false,
          false,
          false
        ])
      }
    }

    console.log("menu's restriction: " + props.restriction)
    return (
      <div className="Menu center">
        <h3 className="interactiveTitle">MENU</h3>
        <div className = "itemsContainer">{menuItems}</div>
        <h4 className = "error">{error}</h4>
        <button className = "nextBtn submitButton greenBtn" onClick={ReadOrder}>Order</button>
      </div>
    )
  }

  return (
    <div className="dark frame">
      <h3 className = "interactiveHead lightBlue">{props.head1} <span style={{ color: '#F3D5FE' }}>{props.head2}</span></h3>
      <div className="interactive">
        <Menu restriction={props.restriction}></Menu>
        <Orders arr={props.arr}></Orders>
      </div>
      <button className = "nextBtn right" onClick= {() => {
        { props.page === 4 ? props.setPage(5) : props.setPage(7) }
      }}>&gt;</button>
    </div>
  )
}

function NavBar (props) {
  return (
    <div className="nav">
      <button className="navBtn" onClick= {() => {props.setPage(1)}}>
        <span className="navLabel"> Section 1</span>
      </button>
      <button className="navBtn" onClick= {() => {props.setPage(2)}}>
        <span className="navLabel"> Section 2</span>
      </button>
      <button className="navBtn" onClick= {() => {props.setPage(3)}}>
        <span className="navLabel"> Section 3</span>
      </button>
      <button className="navBtn" onClick= {() => {props.setPage(4)}}>
        <span className="navLabel"> Section 4</span>
      </button>
      <button className="navBtn" onClick= {() => {props.setPage(5)}}>
        <span className="navLabel"> Section 5</span>
      </button>
      <button className="navBtn" onClick= {() => {props.setPage(6)}}>
        <span className="navLabel"> Section 6</span>
      </button>
      <button className="navBtn" onClick= {() => {props.setPage(7)}}>
        <span className="navLabel"> Section 7</span>
      </button>
    </div>
  )
}


const secondSubtitle = <span>Pick <span style={{ color: '#FFCFA3' }}>three or more</span> things off the menu</span>

function App () {
  const [page, setPage] = useState(1)
  console.log('page ' + page)
  return (
    <div className="App">
      {/* nav bar */}
      {/* <NavBar setPage={setPage}></NavBar> */}

      {page !== 1 && <button className = "backBtn"
      onClick= {() => {
        { setPage(page-1) }}}>&#8592;</button>}

      {page === 1 && <Title page={page} setPage={setPage}/>}
      {page === 2 && <Introduction page={page} setPage={setPage}/>}
      {page === 3 && <Transition page={page} setPage={setPage}/>}
      {page === 4 && <Interactive
        head1="MAKE SOME ORDERS: "
        head2="Pick two things off the menu"
        restriction = {true}
        page={page} setPage={setPage}
      ></Interactive>}
      {page === 5 && <SmallTransition
        heading="Now let's cause a buffer overflow..."
        text="Et dolore magna aliqua. Sit amet tellus cras adipiscing enim eu. Lacinia quis vel eros donec ac odio tempor orci dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing enim eu. Lacinia quis vel eros donec ac odio tempor orci dapibus."
        btn = "Continue"
        page={page} setPage={setPage}
      ></SmallTransition>}
      {page === 6 && <Interactive
        head1="MAKE A LONG ORDER: "
        head2={secondSubtitle}
        restriction = {false}
        page={page} setPage={setPage}
      ></Interactive>}
      {page === 7 && <SmallTransition
        heading="That's Buffer Overflow!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing enim eu. Lacinia quis vel eros donec ac odio tempor orci dapibus. Now try it with code!"
        btn = "Next Course"
        page={page} setPage={setPage}
     ></SmallTransition>}
    </div>
  )
}

export default App
