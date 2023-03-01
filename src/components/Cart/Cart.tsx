import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import CartModal from "./CartModal";
import "./style.tsx"
import { CartTotal } from "./style";

const Cart = ({ items, total, currency, removeFromCart }) => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="row cart__row">
        <div className="col-md-6">
          <CartTotal>
            Total: {total} {currency}
          </CartTotal>
        </div>
        <div className="col-md-6">
          <Button onClick={handleOpenModal}>Buy</Button>
        </div>
      </div>
      <CartModal
        open={open}
        onClose={handleCloseModal}
        items={items}
        total={total}
        currency={currency}
        removeFromCart={removeFromCart}
      />
    </>
  );
};

Cart.propTypes = {
  items: PropTypes.array,
  total: PropTypes.number,
  currency: PropTypes.string,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
