// src/api/UnsplashApi.js
const UNSPLASH_API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = '_066JalUJXNcUbptPAwJiwfguf7vUdktkdi904GzsQ8';

export const fetchImages = async (query, page = 1) => {
  const response = await fetch(
    `${UNSPLASH_API_URL}/search/photos?page=${page}&query=${query}&client_id=${ACCESS_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  const data = await response.json();
  return data;
};
