import { readFile, writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/products.js';

const modifyProducts = async () => {
  //   const data = await readFile(PATH_DB, 'utf-8');
  //   const db = data ? JSON.parse(data) : [];

  const db = JSON.parse((await readFile(PATH_DB, 'utf-8')) || '[]');

  const updateDB = db.map(({ name, price, category }) => ({
    name,
    price,
    category,
  }));

  writeFile(PATH_DB, JSON.stringify(updateDB, null, 2), 'utf-8');
};

modifyProducts();
