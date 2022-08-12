import { Wrapper } from "./Cart.style";
import CartItem from "../CartItem/CartItem";
import { CartItemType } from "../../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, removeFromCart, addToCart }) => {
  const calculateTotal = (items: CartItemType[]) => {
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  };

  return (
    <Wrapper>
      <>
        <h2>Shopping Cart</h2>
        <div>
          {cartItems.length === 0 ? <h3>No items in cart</h3> : null}
          {cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </div>
        Total $ {calculateTotal(cartItems)}
      </>
    </Wrapper>
  );
};

export default Cart;
