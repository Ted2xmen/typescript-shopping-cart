import { Wrapper } from "./Item.style";
import { Button } from "@mui/material";

import { CartItemType } from "../../App";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3> {item.title} </h3>
        <p> {item.description} </p>
        <h3>$ {item.price} </h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
    </Wrapper>
  );
};

export default Item;
