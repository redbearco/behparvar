'use server'

import axios from "axios"
import { IProduct } from "../types/types";

export const getAllProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=3');
        const res = await response.json();
        const products = res?.products;
        console.log('products', products);
        return products as IProduct[];
    } catch (error) {
        console.log('error', error)
        return null;
    }
}