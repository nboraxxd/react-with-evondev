import { useField } from 'formik'
import React from 'react'

const MyCheckbox = ({ children, id, className, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={`${className}`}>
      <input
        className="p-4 rounded-md border border-gray-100"
        id={id}
        type="checkbox"
        checked={field.value}
        {...field}
        {...props}
      />
      <label htmlFor={id} className="inline-block ml-[10px] font-medium text-sm select-none">
        {children}
      </label>
      <p className="h-4 px-1 mt-[2px] text-[#E74C3C] font-normal text-xs">
        {(meta.touched && meta.error) || ''}
      </p>
    </div>
  )
}

export default MyCheckbox
