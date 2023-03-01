import React from "react";
import PropTypes from "prop-types";
import { CartItemName, CartItemPrice, Flex, SingleCartItem } from "./style";

const CartItem = ({ name, price, currency, onClick }) => {
  return (
    <SingleCartItem>
      <Flex>
        <button className="btn btn-danger btn-xs" onClick={onClick}>
          X
        </button>
        <CartItemName>{name}</CartItemName>
      </Flex>
      <CartItemPrice>
        {price} {currency}
      </CartItemPrice>
    </SingleCartItem>
  );
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CartItem;
