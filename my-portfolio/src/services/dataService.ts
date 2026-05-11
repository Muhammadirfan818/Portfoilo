import axios from 'axios';
import { Project, Experience, Stat } from '../types';

export const fetchPortfolioData = async () => {
  const response = await axios.get('/data/portfolio.json');
  return response.data;
};

export const submitContactForm = async (data: any) => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
};
