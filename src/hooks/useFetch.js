import { useEffect, useState } from "react";


export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);    
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
    

    useEffect(() => {
        
        async function getMoviesData() {
          try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setData(result.results || []);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        }
    
        getMoviesData();
      }, [url]);

  return (
    { data, loading, error }
  )
}

