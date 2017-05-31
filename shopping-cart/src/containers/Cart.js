import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as CartActions from '../actions/CartActions'
import Shelf from '../components/Shelf'

const Cart = (props) => {
  let cartItems = props.cart.map((item, id) => {
    return (
      <li key={id}>
        {item}
        <button onClick={() => props.actions.removeFromCart(id)}>-</button>
      </li>
    )
  })
  return (
    <div>
      <Shelf addItem={props.actions.addToCart}/>
      <h2>Cart</h2>
      <ol>
        {cartItems}
      </ol>
    </div>
  )
}

function mapStateToProps(state, props) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CartActions, dispatch)
  }
}

const wrapperFunction = connect(mapStateToProps, mapDispatchToProps)

const wrappedComponent = wrapperFunction(Cart)

export default wrappedComponent
