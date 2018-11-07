import React from 'react';
import PropTypes from 'prop-types';
import formatMoney from '../lib/formatMoney';
import CartItemStyles from './styles/CartItemStyles';

const CartItem = ({ cartItem }) => (
  <CartItemStyles>
    <img src={cartItem.item.image} width="100" />
    <div className="cart-item-details">
      <h3>{cartItem.item.title}</h3>
      <p>
        {formatMoney(cartItem.item.price * cartItem.quantity)}
        {' - '}
        <em>
          {cartItem.quantity} &times; {formatMoney(cartItem.item.price)} each
        </em>
      </p>
    </div>
  </CartItemStyles>
);

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired
};

export default CartItem;
