import { PATH_DB } from "../constants/products.js";
import * as fs from "node:fs/promises";

const getProductsByMinPrice = async (value) => {
    try {
        const stringProducts = await fs.readFile(PATH_DB, "utf-8");
        const arrProducts = JSON.parse(stringProducts);
        return arrProducts.filter((products) => products.price >= value);

    } catch (error) {
        console.log(error);
    }
};
console.log(await getProductsByMinPrice(300));