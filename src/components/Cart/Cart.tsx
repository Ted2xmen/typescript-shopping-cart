import { Wrapper } from "./Cart.style";
import CartItem from "../CartItem/CartItem";
import { CartItemType } from "../../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, removeFromCart, addToCart }) => {
  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <h3>No items in cart</h3> : null}
      {cartItems.map((item) => {
        return <CartItem key={item.id}
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart} />;
      
      })}
    </Wrapper>
  );
};

export default Cart;
