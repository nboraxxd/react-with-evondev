import React from 'react'

const Card = (props) => {
  console.log(props.colorText)
  return (
    <section className="relative ml-[30px] mt-[93px] w-[calc(100%/3-30px)]">
      <figure>
        <img
          className="block w-full h-[400px] rounded-lg object-cover"
          src={
            props.productImg ||
            'https://images.unsplash.com/photo-1546994372-f636adc59e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybCUyMGN1dGV8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60'
          }
          alt="Cosmic Perspective"
        />
      </figure>
      {/* [&:not(:first-child)]:mt-[30px] */}
      <div className="absolute -bottom-[63px] left-1/2 -translate-x-1/2 w-[91%] max-w-full p-[20px] rounded-[20px] bg-white">
        <div className="flex justify-between items-center [&:not(:first-child)]:mt-[30px]">
          <figure className="flex items-center text-[#333]">
            <img
              className="block w-[30px] h-[30px] rounded-full object-cover"
              src={
                props.authorAvt ||
                'https://images.unsplash.com/photo-1625492922105-5914617fd869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80'
              }
              alt="@zndrson"
            />
            <figcaption className="ml-[12px] text-[#333] font-light text-[1.6rem] leading-normal">
              @zndrson
            </figcaption>
          </figure>
          <div className="flex items-center">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.94668e-08 5.40047C-0.000248434 3.95081 0.582385 2.56192 1.61681 1.5463C2.65124 0.530677 4.05058 -0.0263762 5.5 0.000469468C7.21732 -0.00865054 8.85599 0.719644 10 2.00047C11.144 0.719644 12.7827 -0.00865054 14.5 0.000469468C15.9494 -0.0263762 17.3488 0.530677 18.3832 1.5463C19.4176 2.56192 20.0002 3.95081 20 5.40047C20 10.7565 13.621 14.8005 10 18.0005C6.387 14.7735 7.94668e-08 10.7605 7.94668e-08 5.40047Z"
                fill="#FC2872"
              />
            </svg>
            <p className="ml-[12px] text-[#333] font-normal text-[1.6rem] leading-normal">256</p>
          </div>
        </div>

        <div className="flex justify-between items-center [&:not(:first-child)]:mt-[30px]">
          <h3
            className={`font-medium text-[1.8rem] leading-normal ${
              props.colorText || 'text-[#345594]'
            }`}
          >
            Cosmic Perspective
          </h3>
          <p
            className={`shrink-0 ml-[5px] text-[1.8rem] font-bold leading-normal text-transparent bg-clip-text bg-[linear-gradient(86.88deg,_#7d6aff_1.38%,_#ffb86c_64.35%,_#fc2872_119.91%)]`}
          >
            12,000 PSL
          </p>
        </div>
      </div>
    </section>
  )
}
export default Card
