import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

export default function CartModal({
  open,
  onClose,
  items,
  total,
  currency,
  removeFromCart,
}) {
  return (
    <Modal show={open} onHide={onClose} animation={false}>
      <Modal.Body>
        <h3>Shopping Cart</h3>

        <div className="cart">
          <div className="panel panel-default">
            <div className="panel-body">
              {items.length > 0 && (
                <div className="cart__body">
                  {items.map((item) => (
                    <CartItem
                      key={item.id}
                      {...item}
                      onClick={() => removeFromCart(item.id)}
                    />
                  ))}
                </div>
              )}
              {items.length === 0 && (
                <div className="alert alert-info">Cart is empty</div>
              )}
              <div className="cart__total">
                Total: {total} {currency}
              </div>
            </div>
          </div>
        </div>
        {items.length !== 0 && (
          <div>
            <Button className="btn-primary" onClick={onClose}>Done</Button>
          </div>
        ) }
      </Modal.Body>
    </Modal>
  );
}
CartModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  items: PropTypes.array,
  total: PropTypes.number,
  currency: PropTypes.string,
  removeFromCart: PropTypes.func.isRequired,
};
