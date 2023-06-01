import React from 'react'

const MovieItem = ({ title, posterUrl, overview, rating }) => {
  return (
    <div className="flex flex-col w-[calc(100%/3-40px)] ml-[40px] mt-[40px] rounded-2xl bg-white transition-all ease-linear duration-[0.25s] hover:shadow-[0px_18px_36px_rgba(0,_0,_0,_0.05)]">
      <div className="pt-[10px] px-[10px]">
        <a href="#!">
          <img
            src={
              posterUrl
                ? `https://image.tmdb.org/t/p/original/${posterUrl}`
                : 'https://images.unsplash.com/photo-1651506992897-1e71060ad286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            }
            alt={title}
            className="rounded-lg w-full h-[297px] object-cover"
          />
        </a>
      </div>

      <div className="flex-grow flex flex-col px-[30px] pb-[30px] mt-10">
        <h2 className="font-semibold text-base leading-normal line-clamp-1">
          <a href="#!">{title}</a>
        </h2>
        <p className="mt-4 mb-[25px] font-normal text-sm leading-normal line-clamp-3 text-[#999]">
          {overview}
        </p>
        <div className="flex mt-auto">
          <svg
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66713 1.02447C7.7719 0.702008 8.2281 0.702009 8.33287 1.02447L9.71753 5.28602C9.76439 5.43023 9.89877 5.52786 10.0504 5.52786H14.5313C14.8703 5.52786 15.0113 5.96173 14.737 6.16102L11.1119 8.7948C10.9892 8.88393 10.9379 9.04191 10.9847 9.18612L12.3694 13.4477C12.4742 13.7701 12.1051 14.0383 11.8308 13.839L8.20572 11.2052C8.08305 11.1161 7.91695 11.1161 7.79428 11.2052L4.16918 13.839C3.89488 14.0383 3.52581 13.7701 3.63059 13.4477L5.01525 9.18612C5.06211 9.04191 5.01078 8.88393 4.88811 8.7948L1.26301 6.16102C0.988711 5.96173 1.12968 5.52786 1.46874 5.52786H5.9496C6.10123 5.52786 6.23561 5.43023 6.28247 5.28602L7.66713 1.02447Z"
              stroke="#FFB86C"
              strokeWidth="1.5"
            />
            <path
              d="M5.03301 16.0001L5 16.9995"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M11.0296 16.1981L10.9966 17.1975"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M8.03135 16.0991L7.96533 18.098"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="ml-[9px] font-semibold text-sm leading-normal text-[#333]">
            {rating}
          </span>
        </div>
      </div>
    </div>
  )
}

export default MovieItem
