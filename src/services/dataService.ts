import { Product, Banner } from '../types';

const PRODUCTS_API = 'https://api.sheetbest.com/sheets/ff2dd30e-857b-4c48-a5e8-4997561f93f2';
const BANNERS_API = 'https://api.sheetbest.com/sheets/ec5d0a1d-b5b6-4c4a-b180-9d5e9c4a6250';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(PRODUCTS_API);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchBanners = async (): Promise<Banner[]> => {
  try {
    const response = await fetch(BANNERS_API);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.sort((a: Banner, b: Banner) => a.id - b.id);
  } catch (error) {
    console.error('Error fetching banners:', error);
    throw error;
  }
};