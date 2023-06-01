import React, { useState } from 'react'
import useHandleChange from '../../hooks/useHandleChange'

const FormCustomHook = () => {
  const { value, handleChange: setValue } = useHandleChange({
    name: '',
    email: '',
    hobby: false,
  })

  console.log(value)

  return (
    <section className="w-[1170px] ml-auto mr-auto">
      <div className="p-5">
        <input
          type="text"
          name="name"
          className="block w-full max-w-[500px] p-5 ml-auto mr-auto border rounded-lg outline-none border-gray-200"
          placeholder="Enter your name"
          value={value.name}
          onChange={setValue}
        />

        <input
          type="text"
          name="email"
          className="block w-full max-w-[500px] p-5 mt-5 ml-auto mr-auto border rounded-lg outline-none border-gray-200"
          placeholder="Enter your email"
          value={value.email}
          onChange={setValue}
        />

        <input type="checkbox" name="hobby" value={value.hobby} onChange={setValue} />
      </div>
    </section>
  )
}

export default FormCustomHook
