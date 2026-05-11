import { useState, useEffect } from 'react';
import { fetchPortfolioData } from '../services/dataService';
import { PortfolioData } from '../types';

export const usePortfolioData = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchPortfolioData();
        setData(result);
      } catch (err) {
        setError('Failed to fetch portfolio data');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { data, loading, error };
};
