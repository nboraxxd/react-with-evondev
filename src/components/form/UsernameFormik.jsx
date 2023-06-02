import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const UsernameFormik = () => (
  <section className="w-[1170px] max-w-[calc(100%-40px)] py-6 mx-auto">
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required('Please enter your username')
          .max(20, 'Username must not exceed 20 characters'),
        email: Yup.string().required('Please enter your email').email('Your email is not valid'),
      })}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {(props) => (
        <Form className="w-[400px] mx-auto" noValidate>
          {/* Username */}
          <div className="flex flex-col">
            <label htmlFor="username" className="font-medium text-sm cursor-pointer">
              Username
            </label>
            <Field
              className="p-[15px] mt-[5px] outline-none border border-purple-200 rounded-lg bg-white focus:[box-shadow:_0px_0px_0px_2px_rgba(125,_106,_255,_0.5)] transition-all"
              name="username"
              type="text"
              id="username"
              autoComplete="off"
              placeholder="Enter your username"
            />
            <div className="h-4">
              <ErrorMessage
                name="username"
                component="p"
                className="px-1 mt-[2px] text-[#E74C3C] font-normal text-xs"
              />
            </div>
          </div>

          {/* Email address */}
          <div className="flex flex-col mt-[10px]">
            <label htmlFor="email" className="font-medium text-sm cursor-pointer">
              Email address
            </label>
            <Field
              className="p-[15px] mt-[5px] outline-none border border-purple-200 rounded-lg bg-white focus:[box-shadow:_0px_0px_0px_2px_rgba(125,_106,_255,_0.5)] transition-all"
              name="email"
              type="email"
              id="email"
              autoComplete="off"
              placeholder="Enter your email"
            />
            <div className="h-4">
              <ErrorMessage
                name="email"
                component="p"
                className="h-4 px-1 mt-[2px] text-[#E74C3C] font-normal text-xs"
              />
            </div>
          </div>

          {/* Button submit */}
          <button
            type="submit"
            className="w-full h-[56px] mt-[10px] p-4 bg-purple-600 rounded-lg font-bold text-white text-base"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </section>
)

export default UsernameFormik
