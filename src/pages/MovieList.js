
import { useEffect, useState } from 'react'
import {Card} from '../components/Card'
import { useFetch } from '../hooks/useFetch';

export const MovieList = ({apiPath}) => {
  console.log(apiPath);
  const { data: movies, loading, error } = useFetch(apiPath);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {
            movies.map((moviedata) => (
              <Card key={moviedata.id} moviedata={moviedata} />
            ))
          }
          
         

        </div> 
      </section>
    </main>
  )
}