import { useField } from 'formik'
import React from 'react'
import './RadioFormik.scss'

const RadioFormik = ({ id, ...props }) => {
  const [field] = useField(props)

  return (
    <label className="flex items-center">
      <div className="w-3 h-3 custom-radio cursor-pointer">
        <input type="radio" id={id} hidden {...field} {...props} />
        <div className="bg-white w-full h-full rounded-full "></div>
      </div>
      <span className="pl-[12px] text-[#333] font-normal text-sm capitalize select-none cursor-pointer">
        {id}
      </span>
    </label>
  )
}

export default RadioFormik
