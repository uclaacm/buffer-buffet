import React, { useState } from 'react'
// import Scrollspy from 'react-scrollspy'
import './App2.css'
import illo from './illo.svg'
import p1 from './p1 (1).svg'
import p2 from './p2 (1).svg'
// import chef from './chef.svg'

// to do: style scrollspy, resize, tiny scroll(s)

// frames
function Title (props) {
  return (
    <div className='frame titleContainer'>
      <div className = "title-content">
        <div className="title greenText">Buffer Buffet</div>
        <div id="section-1">
          Did you say “table for one”? Thanks for visiting Buffer Buffet! Today,
          we’ll be serving you a full-course meal on the concept of buffer
          overflow, courtesy of your favorite code chefs from Teach LA.
        </div>
        <button className = "lightBtn button" onClick= {() => {
          props.setPage(2)
        }}>Let&apos;s get cooking!</button>
      </div>
      <div className="title-illo-container">
        <img id="illo" src={illo} alt="Illustration of Platter" />
      </div>
    </div>
  )
}

function Introduction (props) {
  const dropdownDefault1 =
    (
  <div>
<div style={{ fontWeight: 'lighter' }}>
  <span style={{ textDecorationLine: 'underline' }}>Buffers</span> are
  areas of memory set aside to hold data temporarily as it is being
  transferred from one region to another. It can hold anything from
  character strings to arrays of integers. As is in memory systems or
  programs, the sizes of these buffers are typically well-defined.
</div>
<div style={{ fontWeight: 'lighter' }}>
  For example, a program could contain a 8-byte buffer for a user to enter
  their password.
</div>
<br/>
<img className="password" src={p1} alt="Buffer Example Password" />
    </div>
    )

  const dropdownDefault2 =
    (<div>
      <div style={{ fontWeight: 'lighter' }}>
        <span style={{ textDecorationLine: 'underline' }}>Buffer overflow</span>{' '}
        happens when a program attempts to input more data in a buffer than it
        can hold. As a result, the program ends up going past the buffer&#39;s
        boundary and overwrites adjacent memory locations.
      </div>

      <br />

      <img className="password" src={p2} alt="Buffer Overflow Password" />

      <br />

      <div style={{ fontWeight: 'lighter' }}>
        Using the example above, the buffer would overflow if a user attempts to
        enter in data that exceeds the 8 bytes alloted.
      </div>
    </div>
    )

  const [show1, switch1] = useState([true])
  const [show2, switch2] = useState([false])

  console.log('show1: ' + show1)
  console.log('show2: ' + show2)

  return (
    <div className="frame long">
      <div className = "heading">
        <div className = "headingOne lightText">INTRODUCTION</div>
        <div className = "headingTwo lightText">What is buffer overflow?</div>
      </div>

      <div style={{ fontWeight: 'lighter' }}>
        To satisfy your hunger for knowledge, we’ll start with a quick intro of
        what buffer overflow is.
      </div>

      <div className="headingThree"> Ok, so what’s a buffer? <span className = "dropdown " onClick = {() => {
        switch1(!show1)
      }}>
        {show1 ? '▲' : '▼'}
      </span> </div>
      <hr/>
      {!show1 ? '' : dropdownDefault1}

      <div className="headingThree">How do buffers overflow? <span className = "dropdown" onClick = {() => {
        switch2(!show2)
      }}>{!show2 ? '▲' : '▼'}</span></div>
      <hr/>
      {show2 ? '' : dropdownDefault2}
      <br/>
      <div className="center">
        <button className = "button greenBtn" onClick= {() => {
          props.setPage(3)
        }}>Continue</button>
      </div>
    </div>
  )
}

function Transition (props) {
  return (
    <div className="light frame chefFrame">
      <div>
        <div className = "greenText">
          <div className = "headingOne fill">AN ANALOGY</div>
          <div className = "headingTwo fill">Buffer Overflow in the Kitchen</div>
      </div>
      <div className = "transitionContainer">
        <div className="chefText">
          To better illustrate the concept of buffer overflow, let’s cook up an
          analogy. Say you’re eating at a restaurant - what usually happens is
          that a waiter comes over, takes your order, writes it down on a
          notepad, then hands over these orders to the chef.
        </div>
        <button className = "button lightBtn" onClick= {() => {
          props.setPage(4)
        }}>Continue</button>
      </div>
      </div>
    </div>
  )
}

function SmallTransition (props) {
  return (
    <div className="light frame smallTransition">
      <div>
        <div className="headingTwo greenText">{props.heading}</div>
        <div>{props.text}</div>
        <br/>
        <div className="center">
          { props.page === 5
            ? <button className = "button lightBtn" onClick= {() => {
              props.setPage(6)
            }}>{props.btn}</button>
            : <a className = "button lightBtn link" href="https://bufferbuffet-simulator.uclaacm.com/">{props.btn}</a>
          }
        </div>
      </div>
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
        <div style={{ fontWeight: 600 }}>Order {props.num}</div>
        <div>{props.items[0]}</div>
        <div>{props.items[1]}</div>
      </div>
    )
  }

  function Orders () {
    return (
      <div className="Orders">
        <div className="interactiveTitle">ORDERS</div>
        <div className="OrderContainer">
          <div className="empty">
            <div className="question">?</div>
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
        <div className="interactiveTitle">MENU</div>
        <div className = "itemsContainer">{menuItems}</div>
        <div className = "error"
          style= {error ? {} : { height: '0px' }}
        >{error}</div>
        <button className = "button submitButton greenBtn" onClick={ReadOrder}>Order</button>
      </div>
    )
  }

  return (
    <div className="dark frame">
      <div className="interactiveFrame">
        <div className="interactiveContainer">
        <div className = "headingOne lightText interactiveHead">{props.head1} <span style={{ color: '#F3D5FE' }}>{props.head2}</span></div>
        <div className="interactive">
          <Menu restriction={props.restriction}></Menu>
          <Orders arr={props.arr}></Orders>
        </div>
        </div>
      </div>
      <button className = "nextBtn interactiveBtn" onClick= {() => {
        props.page === 4 ? props.setPage(5) : props.setPage(7)
      }}>&gt;</button>
    </div>
  )
}

const secondSubtitle = <span>Pick <span style={{ color: '#FFCFA3' }}>three or more</span> things off the menu</span>

function App () {
  const [page, setPage] = useState(1)
  console.log('page ' + page)
  return (
    <div className={page % 2 === 1 ? 'App light' : 'App dark'}>
      {page !== 1 && <button className =
      { page % 2 === 1 ? 'backBtn light' : 'backBtn dark'}
      onClick= {() => {
        setPage(page - 1)
      }}>&#8592;</button>}

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
        text="In the previous slide, customers had the ability to pick two things off the menu per order as there is only room for two items on each page of the notepad. Therefore, there’s no confusion over which items belong under a specific order number. What happens if a customer tries to order more than two items?"
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
        text="When a customer tries to order more than two items, the waiter must record the additional items on the next page. However, by the restaurant’s standards, each page of the notepad has an order number. As a result, when the waiter tries to check the next order, the additional items are specified rather than the new order putting the restaurant in a bit of a pickle. Now that we’ve gone through the analogy for buffer overflow, let’s try it out with code!"
        btn = "Next Course"
        page={page} setPage={setPage}
     ></SmallTransition>}
    </div>
  )
}

export default App
