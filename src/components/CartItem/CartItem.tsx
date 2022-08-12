import { Wrapper } from "./CartItem.style";
import { Button } from "@mui/material";

import { CartItemType } from "../../App";

type Props = {
  item: CartItemType;
  removeFromCart: (id: number) => void;
  addToCart: (clickedItem: CartItemType) => void;
};


const CartItem: React.FC<Props> = () => {
  return <Wrapper>CartItem</Wrapper>;
};

export default CartItem;
