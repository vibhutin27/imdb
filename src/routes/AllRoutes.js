import { Routes, Route } from 'react-router-dom'
import { MovieDetails, MovieList, PageNotFound, Search } from '../pages/index'

const AllRoutes = () => {
  return (
    <div className='dark:bg-darkbg'>
        <Routes>
            <Route path='/' element={ <MovieList />} />
            <Route path='/movie/:id' element={ <MovieDetails />} />
            <Route path='/movie/popular' element={ <MovieDetails />} />
            <Route path='/movie/top' element={ <MovieDetails />} />
            <Route path='/movie/upcoming' element={ <MovieDetails />} />
            <Route path='search' element={ <Search />} />
            <Route path='*' element={ <PageNotFound />} />
        </Routes>
    </div>
  )
}

export default AllRoutes