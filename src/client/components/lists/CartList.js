import React from "react";

import CartItem from "./items/CartItem";
import { List } from "antd";

const CartList = (props) => (
  <List
    itemLayout="vertical"
    size="large"
    dataSource={props.userList}
    renderItem={item => (
      <CartItem item={item}/>
    )}
  />
);

export default CartList;