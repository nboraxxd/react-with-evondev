import { useField } from 'formik'
import React from 'react'

const InputFormik = ({ label, id, className, ...props }) => {
  const [field, meta] = useField(props)
  // console.log(field, meta)

  return (
    <div className={`flex flex-col ${className || ''}`}>
      <label htmlFor={id} className="font-medium text-sm select-none">
        {label}
      </label>
      {id === 'password' ? '' : ''}
      <input
        id={id}
        className="p-[15px] mt-[2px] outline-none border border-purple-200 rounded-lg bg-white focus:[box-shadow:_0px_0px_0px_2px_rgba(125,_106,_255,_0.5)] transition-all"
        {...field}
        {...props}
      />
      <p className="h-4 px-1 mt-[2px] text-[#E74C3C] font-normal text-xs">
        {(meta.touched && meta.error) || ''}
      </p>
    </div>
  )
}

export default InputFormik
