import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./cart-dropdown.style.scss";
import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go To CHECKOUT</Button>
    </div>
  );
};
export default CartDropdown;
