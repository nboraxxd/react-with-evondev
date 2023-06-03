import { useField } from 'formik'
import React, { useEffect, useState } from 'react'
import useClickOutSide from '../../hooks/useClickOutSide'

const DropdownFormik = ({ name, dataJobs, labelContent, labelDefault, setValue }) => {
  const { show, setShow, nodeRef } = useClickOutSide()
  const [label, setLabel] = useState('')
  const [field, meta] = useField({ name })
  console.log(label)

  useEffect(() => {
    if (field.value === '') setLabel(labelDefault)
  }, [field.value])

  const handleClickDropdownItem = (event) => {
    setValue(name, event.target.dataset.value)
    setLabel(event.target.textContent)
    setShow(false)
  }

  return (
    <div className="flex flex-col mt-[10px]">
      <label className="select-none cursor-pointer">{labelContent}</label>
      <div className="relative mt-[5px]" ref={nodeRef}>
        <div
          onClick={() => setShow(!show)}
          className={`flex items-center justify-between p-[15px] mb-[2px] border border-purple-200 rounded-lg bg-white select-none cursor-pointer transition-all ${
            show && '[box-shadow:_0px_0px_0px_2px_rgba(125,_106,_255,_0.5)]'
          }`}
        >
          {label === '' || label === labelDefault ? (
            <span className="text-[#999] select-none">{labelDefault}</span>
          ) : (
            <span className="select-none">{label}</span>
          )}
          <svg
            width="12"
            height="8.4"
            viewBox="0 0 11 7.7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${show && 'rotate-180'} transition-all`}
          >
            <path
              d="M0.999999 1L4.16795 5.75193C4.56377 6.34566 5.43623 6.34566 5.83205 5.75192L9 1"
              stroke="#292D32"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="0.2 0.2"
            />
          </svg>
        </div>
        <div
          className={`absolute top-full left-0 w-full rounded-lg bg-white ${
            !show && 'opacity-0 invisible'
          }`}
        >
          {Array.isArray(dataJobs) &&
            dataJobs.length > 0 &&
            dataJobs.map((item) => {
              return (
                <span
                  key={item.id}
                  className="px-[15px] py-3 border-b border-purple-200 block cursor-pointer last:border-b-0"
                  data-value={item.value}
                  onClick={handleClickDropdownItem}
                >
                  {item.jobName}
                </span>
              )
            })}
        </div>
      </div>

      <p className="h-4 px-1 mt-[2px] text-[#E74C3C] font-normal text-xs">
        {(meta.touched && meta.error) || ''}
      </p>
    </div>
  )
}

export default DropdownFormik
