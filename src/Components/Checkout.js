import React, { useContext } from 'react'
import { BasketContext } from '../App';
import "./checkout.css";
import { Subtotal } from "./Subtotal";
import { CheckoutProduct } from "./CheckoutProduct";

export const Checkout = () => {

    const basketContext = useContext(BasketContext)

    return (

        <div className="body">
            <main>
                <div className="basket">
                    <div className="basket-module">
                        <label htmlFor="promo-code">Enter a promotional code</label>
                        <input id="promo-code" type="text" name="promo-code" maxLength="5" className="promo-code-field" />
                        <button className="promo-code-cta">Apply</button>
                    </div>
                    <div className="basket-labels">
                        <ul>
                            <li className="item item-heading">Item</li>
                            <li className="price">Price</li>
                            <li className="quantity">Quantity</li>
                            <li className="subtotal">Subtotal</li>
                        </ul>
                    </div>
                    {
                        basketContext.state.basket.map(product => {
                            return (
                                <CheckoutProduct
                                    id={product.id}
                                    img={product.img}
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rating}
                                />
                            )
                        })
                    }
                </div>
                <Subtotal />
            </main>
        </div>
    )
}
