import React, { useState } from 'react'

const Form = () => {
  const [value, setValue] = useState({
    name: '',
    email: '',
  })
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleInputChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    })
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()

    const isValidateEmail = validateEmail(value.email)

    value.name === '' ? setNameError('Please enter your name') : setNameError('')
    !isValidateEmail ? setEmailError('Please enter your email') : setEmailError('')
  }

  return (
    <section className="w-[1170px] max-w-[calc(100%-40px)] mx-auto">
      <form className="p-5" onSubmit={handleSubmitForm} autoComplete="off">
        <div>
          <input
            type="text"
            name="name"
            className="block w-full max-w-[500px] p-5 ml-auto mr-auto border rounded-lg outline-none border-gray-200"
            placeholder="Enter your name"
            value={value.name}
            onChange={handleInputChange}
          />
          <p className="w-full max-w-[500px] min-h-[20px] px-2 mt-[2px] ml-auto mr-auto text-red-600 text-sm">
            {nameError}
          </p>
        </div>

        <div className="mt-3">
          <input
            type="text"
            name="email"
            className="block w-full max-w-[500px] p-5 ml-auto mr-auto border rounded-lg outline-none border-gray-200"
            placeholder="Enter your email"
            value={value.email}
            onChange={handleInputChange}
          />
          <p className="w-full max-w-[500px] min-h-[20px] px-2 mt-[2px] ml-auto mr-auto text-red-600 text-sm">
            {emailError}
          </p>
        </div>

        <button
          type="submit"
          className="block px-5 py-3 mt-3 ml-auto mr-auto rounded-lg bg-pink-700 text-white"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default Form
