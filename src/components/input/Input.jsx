import { useField } from 'formik'
import React from 'react'

const Input = ({ label }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="username" className="font-medium text-sm cursor-pointer">
        Username
      </label>
      <input
        className="p-[15px] mt-[5px] outline-none border border-purple-200 rounded-lg bg-white focus:[box-shadow:_0px_0px_0px_2px_rgba(125,_106,_255,_0.5)] transition-all"
        name="username"
        type="text"
        id="username"
        autoComplete="off"
        placeholder="Enter your username"
      />
      <div className="h-4">
        <p name="username" className="px-1 mt-[2px] text-[#E74C3C] font-normal text-xs" />
      </div>
    </div>
  )
}

export default Input
