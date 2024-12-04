
import { useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
import { Card } from '../components/Card'

export const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies, loading, error } = useFetch(apiPath, queryTerm);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'` }</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {
            movies.map((moviedata) => (
              <Card key={moviedata.id} moviedata={moviedata} />
            ))
          }
        </div> 
      </section>
    </div>
  )
}

