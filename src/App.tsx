import "./App.css";
import { useState } from "react";
import { QueryKey, useQuery } from "@tanstack/react-query";
import Drawer from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from "@mui/material/Icon";
import Badge from "@mui/material";
// styles

import { Wrapper } from "./App.styles";

import Item from "./components/Item/Item";

// types
export type CartItemType = {
  id: number;
  category: string;
  image: string;
  description: string;
  price: number;
  title: string;
  // amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => {
  return await await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  ); // double await because converting json take times
};

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    ["products"],
    getProducts
  );
  console.log("data", data);

  const getTotalItems = () => null;
  const handleAddToCart = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;

  return (
    <div className="App">
      <Wrapper>
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
