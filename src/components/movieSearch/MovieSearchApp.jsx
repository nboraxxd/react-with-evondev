// https://api.themoviedb.org/3/movie/popular?api_key=420f70579a0e052b266773b14c50045b
// https://api.themoviedb.org/3/search/movie?api_key=420f70579a0e052b266773b14c50045b&query=harry
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
import MovieItem from './MovieItem'
import MovieItemSkeleton from './MovieItemSkeleton'

const MovieSearchApp = () => {
  const [movieList, setMovieList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(true)
  const searchTextDebounce = useDebounce(searchText)

  async function fetchDataMovie() {
    setLoading(true)

    const responseDataMovie = await axios.get(
      searchText
        ? `https://api.themoviedb.org/3/search/movie?api_key=420f70579a0e052b266773b14c50045b&query=${searchTextDebounce}`
        : 'https://api.themoviedb.org/3/movie/popular?api_key=420f70579a0e052b266773b14c50045b'
    )

    if (responseDataMovie.status === 200) {
      setMovieList(responseDataMovie.data?.results)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDataMovie()
  }, [searchTextDebounce])

  return (
    <div>
      <div className="w-[1280px] max-w-[calc(100%-48px)] mx-auto my-5">
        <section className="w-full max-w-[500px] mx-auto">
          <input
            type="text"
            name="searchMovie"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search movie..."
            className="w-full py-[18px] px-5 outline-none border border-[#7e6aff85] rounded-lg shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2)] focus:border-[#7D6AFF] transition-all ease-linear duration-[0.25s]"
          />
        </section>
        <section className="mt-[67px]">
          {loading && (
            <div className="flex flex-wrap -mt-[40px] -ml-[40px]">
              <MovieItemSkeleton />
              <MovieItemSkeleton />
              <MovieItemSkeleton />
            </div>
          )}
          {!loading && (
            <div className="flex flex-wrap -mt-[40px] -ml-[40px]">
              {movieList.map((movieItem) => {
                return (
                  <MovieItem
                    key={movieItem.id}
                    title={movieItem.original_title}
                    posterUrl={movieItem.backdrop_path}
                    overview={movieItem.overview}
                    rating={movieItem.vote_average?.toFixed(1)}
                  />
                )
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default MovieSearchApp
