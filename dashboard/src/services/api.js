import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllHoldings = () => {
  return axios.get(`${API_URL}/allHoldings`);
};

export const getAllPositions = () => {
  return axios.get(`${API_URL}/allPositions`);
};

export const getAllOrders = () => {
  return axios.get(`${API_URL}/allOrders`);
};

export const placeOrder = (name, qty, price, mode) => {
  return axios.post(`${API_URL}/newOrder`, { name, qty, price, mode });
};