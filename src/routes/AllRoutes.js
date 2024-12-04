import { Routes, Route } from 'react-router-dom'
import { MovieDetails, MovieList, PageNotFound, Search } from '../pages/index'

const AllRoutes = () => {
  return (
    <div className='dark:bg-darkbg'>
        <Routes>
            <Route path="" element={<MovieList apiPath="movie/now_playing" title="Home"/>} />
            <Route path='movies/:id' element={ <MovieDetails  />} />
            <Route path='movies/popular' element={ <MovieList apiPath="movie/popular" title="Popular" />} />
            <Route path='movies/top' element={ <MovieList apiPath="movie/top_rated" title="Top Rated"  />} />
            <Route path='movies/upcoming' element={ <MovieList apiPath="movie/upcoming" title="upcomming" />} />
            <Route path='search' element={ <Search apiPath="search/movie" />} />
            <Route path='*' element={ <PageNotFound />} />
        </Routes>
    </div>
  )
}

export default AllRoutes
