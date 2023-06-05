import React, { useEffect } from 'react'
import { Controller, useController, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'

const schemaMyForm = yup.object({
  username: yup
    .string()
    .required('Username is required')
    .min(5, 'Username must be 5 chars at minimum')
    .max(20, 'Username must not exceed 20 chars'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Your password must be 8 chars at minimum')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
  email: yup.string().required('Email is required').email('Invalid email address format'),
})

const MyFormHook = () => {
  const defaultValues = {
    username: '',
    password: '',
    email: '',
  }

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    control,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schemaMyForm), defaultValues })

  const onSubmit = async (data) => {
    const response = await axios.get('https://hn.algolia.com/api/v1/search?query=react')

    console.log(data)
    reset({
      username: '',
      password: '',
      email: '',
    })
    return response.data
  }

  useEffect(() => {
    setFocus('username')
  }, [setFocus])

  console.log(control)

  return (
    <section className="w-[1170px] max-w-[calc(100%-40px)] mx-auto my-[20px]">
      <form className="w-full max-w-[400px] mx-auto" onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <div className="flex flex-col">
          <label htmlFor="username" className="font-medium text-sm cursor-pointer">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="p-[15px] mt-[5px] outline-none border border-purple-200 rounded-lg bg-white focus:[box-shadow:_0px_0px_0px_2px_rgba(125,_106,_255,_0.5)] transition-all"
            placeholder="Enter your name"
            autoComplete="username"
            {...register('username')}
          />
          <p className="w-full max-w-[400px] h-[20px] min-h-[20px] px-1 mt-[2px] ml-auto mr-auto text-red-600 text-sm">
            {errors.username?.message}
          </p>
        </div>

        {/* Email address */}
        <div className="flex flex-col mt-[10px]">
          <label htmlFor="email" className="font-medium text-sm cursor-pointer">
            Email address
          </label>
          {/* <input
            type="email"
            id="email"
            className="p-[15px] mt-[5px] outline-none border border-purple-200 rounded-lg bg-white focus:[box-shadow:_0px_0px_0px_2px_rgba(125,_106,_255,_0.5)] transition-all"
            placeholder="Enter your email address"
            autoComplete="email"
            {...register('email')}
          /> */}
          <MyEmail
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="Enter your email address"
            control={control}
          />
          <p className="w-full max-w-[400px] h-[20px] min-h-[20px] px-1 mt-[2px] ml-auto mr-auto text-red-600 text-sm">
            {errors.email?.message}
          </p>
        </div>

        {/* Password */}
        <div className="flex flex-col mt-[10px]">
          <label htmlFor="password" className="font-medium text-sm cursor-pointer">
            Password
          </label>
          <MyPassword
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="new-password"
            control={control}
          />
          {/* <input
            type="password"
            id="password"
            className="p-[15px] mt-[5px] outline-none border border-purple-200 rounded-lg bg-white focus:[box-shadow:_0px_0px_0px_2px_rgba(125,_106,_255,_0.5)] transition-all"
            placeholder="Enter your password"
            autoComplete="off"
            {...register('password')}
          /> */}
          <p className="w-full max-w-[400px] h-[20px] min-h-[20px] px-1 mt-[2px] ml-auto mr-auto text-red-600 text-sm">
            {errors.password?.message}
          </p>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className={`block min-h-[50px] min-w-[120px] px-5 py-3 mt-3 ml-auto mr-auto rounded-lg text-white ${
            isSubmitting ? 'bg-pink-500' : 'bg-pink-700'
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </section>
  )
}

const MyEmail = ({ control, ...props }) => {
  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field }) => (
        <input
          {...field}
          {...props}
          className="p-[15px] mt-[5px] outline-none border border-purple-200 rounded-lg bg-white focus:[box-shadow:_0px_0px_0px_2px_rgba(125,_106,_255,_0.5)] transition-all"
        />
      )}
    ></Controller>
  )
}

const MyPassword = ({ control, ...props }) => {
  const { field } = useController({ control, name: props.name })

  return (
    <input
      {...field}
      {...props}
      className="p-[15px] mt-[5px] outline-none border border-purple-200 rounded-lg bg-white focus:[box-shadow:_0px_0px_0px_2px_rgba(125,_106,_255,_0.5)] transition-all"
    />
  )
}

export default MyFormHook
