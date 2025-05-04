import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readFile, writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/products.js';

const generateProducts = async (number) => {
  const db = await readFile(PATH_DB, 'utf-8');
  const parseDb = JSON.parse(db);

  for (let i = 0; i < number; i++) {
    const product = createFakeProduct();
    parseDb.push(product);
  }

  writeFile(PATH_DB, JSON.stringify(parseDb, null, 2), 'utf-8');
};

generateProducts(1);
