import "./App.css";
import { useState } from "react";
import { QueryKey, useQuery } from "@tanstack/react-query";
import Drawer from "@mui/material/Drawer";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import { AddShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import Cart from "./components/Cart/Cart";
// styles

import { Wrapper, StyledButton } from "./App.styles";

import Item from "./components/Item/Item";

// types
export type CartItemType = {
  id: number;
  category: string;
  image: string;
  description: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => {
  return await await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  ); // double await because converting json take times
};

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    ["products"],
    getProducts
  );

  // const getTotalItems = (items: CartItemType[]) => {
  //   items.reduce((ack: number, item) => ack + item.amount, 0)
  // };
  const getTotalItems = (items: CartItemType[]) => null;
  const handleAddToCart = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;

  return (
    <div className="App">
      <Wrapper>
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart
            CartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error"></Badge>
          <AddShoppingCart />
        </StyledButton>

        <Grid container spacing={3}>
          {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </div>
  );
};

export default App;
