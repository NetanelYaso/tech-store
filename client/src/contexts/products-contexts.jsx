import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"
import { getOrders } from "../services/orders";
import { getProducts } from "../services/products";
import { getSales } from "../services/sales";
export const productsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [orders, serOrders] = useState([]);
    const [sales, setSales] = useState([]);
    useEffect(() => {
        getProducts().then(result => setProducts(result.products));
        getOrders().then(result => serOrders(result.orders))
        getSales().then(result => setSales(result.sales))

    }, [])
    return (
        <productsContext.Provider value={{
            products, setProducts,
            orders, serOrders,
            sales, setSales                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        }}>
            {children}
        </productsContext.Provider>
    )
}

export default ProductsProvider;