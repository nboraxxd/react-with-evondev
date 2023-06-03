import { useField } from 'formik'
import React from 'react'
import './CheckboxFormik.scss'

const CheckboxFormik = ({ children, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className="inline-flex flex-col mt-[10px]">
      <label className="cursor-pointer custom-checkbox ">
        <input type="checkbox" className="hidden" checked={field.value} {...field} {...props} />

        <div className="flex items-center">
          <div className="bg-white border-purple-300 border rounded-md flex items-center justify-center custom-checkbox-inner">
            <svg
              width="14"
              height="12"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7453 1.89733L3.93178 9.71087L0.254822 6.03391L1.17132 5.11741L3.93178 7.87137L10.8288 0.980835L11.7453 1.89733Z"
                fill="currentColor"
                className="transition-all ease-linear duration-[0.25s]"
              />
            </svg>
          </div>
          <div className="ml-[12px] text-sm select-none cursor-pointer">{children}</div>
        </div>
      </label>

      <p className="h-4 px-1 mt-[2px] text-[#E74C3C] font-normal text-xs">
        {(meta.touched && meta.error) || ''}
      </p>
    </div>
  )
}

export default CheckboxFormik
