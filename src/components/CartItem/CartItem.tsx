import { Wrapper } from "./CartItem.style";
import { Button } from "@mui/material";

import { CartItemType } from "../../App";
import Item from "../Item/Item";

type Props = {
  item: CartItemType;
  removeFromCart: (id: number) => void;
  addToCart: (clickedItem: CartItemType) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <div>
        <h3> {item.title} </h3>
        <div className="information">
          <p> Price : $ {item.price} </p>
          <p> Total $ : {(item.amount * item.price).toFixed(2)} </p>
        </div>
        <div className="buttons">
          <Button
            variant="contained"
            size="small"
            disableElevation
            color="primary"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
          <p>{item.amount} </p>
          <Button
            variant="contained"
            size="small"
            disableElevation
            color="primary"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;
