import { useEffect, useState } from 'react';

// fetchData 함수는 동일하게 유지
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        reject(new Error('Failed to load data'));
      } else {
        resolve('Data loaded successfully');
      }
    }, 2000);
  });
};

export default function Test() {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then(data => {
        setData(data as string);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  if (error) {
    throw error;
  }

  return <div>{data}</div>;
}
