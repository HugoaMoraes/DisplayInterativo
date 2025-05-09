import { Product, Banner } from '../types';

const PRODUCTS_API = 'https://api.sheetbest.com/sheets/ff2dd30e-857b-4c48-a5e8-4997561f93f2';
const BANNERS_API = 'https://api.sheetbest.com/sheets/ec5d0a1d-b5b6-4c4a-b180-9d5e9c4a6250';

const fetchWithTimeout = async (url: string, timeout = 5000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } finally {
    clearTimeout(id);
  }
};

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    return await fetchWithTimeout(PRODUCTS_API);
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Falha ao carregar produtos. Por favor, tente novamente mais tarde.');
  }
};

export const fetchBanners = async (): Promise<Banner[]> => {
  try {
    const data = await fetchWithTimeout(BANNERS_API);
    return data.sort((a: Banner, b: Banner) => a.id - b.id);
  } catch (error) {
    console.error('Error fetching banners:', error);
    throw new Error('Falha ao carregar banners. Por favor, tente novamente mais tarde.');
  }
};