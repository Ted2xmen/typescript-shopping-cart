import { Wrapper } from "./Cart.style";
import CartItem from "../CartItem/CartItem";
import { CartItemType } from "../../App";

type Props = {
  CartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ CartItems, removeFromCart, addToCart }) => {
  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      {CartItems.length === 0 ? <h3>No items in cart</h3> : null}
      {CartItems.map((item) => {
        return <CartItem />;
      })}
    </Wrapper>
  );
};

export default Cart;
