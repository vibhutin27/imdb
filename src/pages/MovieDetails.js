import { useEffect } from "react"

export const MovieDetails = () => {

  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/movie/latest';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjZlMzUzZjE0NDJkMzQ3Y2ZlYTAzODZlMzM5ZmI4YyIsIm5iZiI6MTczMjczMDE1OC4xMTM3MTQ3LCJzdWIiOiI2NzQ2ZGZiODY0ZjdlMjAzZWFiMTc3ODMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Vx46Q2OX7OmwoEX7083TTdac-24YY_xnBM3wVY2JvgY'
      }
    };
    
    const data = fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error(err));

      console.log(data);

  },[]);

  return (
    <main>
      <div className='decoration-double decoration-slate-200 font-extrabold'>
        Movie Details

        

      </div>
    </main>
  )
}

