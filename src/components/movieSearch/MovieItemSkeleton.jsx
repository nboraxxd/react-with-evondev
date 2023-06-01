import React from 'react'
import LoadingSkeleton from '../loadingSkeleton/LoadingSkeleton'

const MovieItemSkeleton = () => {
  return (
    <div className="flex flex-col w-[calc(100%/3-40px)] ml-[40px] mt-[40px] rounded-2xl bg-white">
      <div className="pt-[10px] px-[10px]">
        <LoadingSkeleton width="100%" height="297px" borderRadius="8px" />
      </div>

      <div className="flex-grow flex flex-col px-[30px] pb-[30px] mt-10">
        <LoadingSkeleton width="100%" height="24px" borderRadius="4px" />
        <LoadingSkeleton width="100%" height="17px" borderRadius="4px" className="mt-4" />
        <LoadingSkeleton width="100%" height="17px" borderRadius="4px" className="mt-[6px]" />
        <LoadingSkeleton width="100%" height="17px" borderRadius="4px" className="mt-[6px]" />
        <LoadingSkeleton width="47px" height="21px" borderRadius="4px" className="mt-[25px]" />
      </div>
    </div>
  )
}

export default MovieItemSkeleton
