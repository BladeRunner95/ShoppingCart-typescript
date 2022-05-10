import {CartItem} from "../CartItem/CartItem";
// Styles
import {Wrapper} from "./Cart.style";
//Types
import {CartItemType} from "../../App";
import React from "react";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

export const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart}) => {

    return (
        <Wrapper>
            <h2>Your shopping cart</h2>
            {cartItems.length === 0 ? <p>No items in cart</p> : null}
            {cartItems.map(item => (
                <CartItem />
                )
            )}
        </Wrapper>
    )
}