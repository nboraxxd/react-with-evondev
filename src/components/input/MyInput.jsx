import { useField } from 'formik'
import React from 'react'

const Input = ({ label, id, className, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={`flex flex-col ${className || ''}`}>
      <label htmlFor={id} className="font-medium text-sm cursor-pointer">
        {label}
      </label>
      <input
        className="p-[15px] mt-[5px] outline-none border border-purple-200 rounded-lg bg-white focus:[box-shadow:_0px_0px_0px_2px_rgba(125,_106,_255,_0.5)] transition-all"
        id={id}
        autoComplete="off"
        {...field}
        {...props}
      />

      <p className="h-4 px-1 mt-[2px] text-[#E74C3C] font-normal text-xs">
        {(meta.touched && meta.error) || ''}
      </p>
    </div>
  )
}

export default Input
