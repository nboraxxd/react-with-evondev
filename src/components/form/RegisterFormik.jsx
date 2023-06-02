import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const dataJobs = [
  { id: 1, value: 'softwareEngineering', jobName: 'Software Engineering' },
  { id: 2, value: 'data', jobName: 'Data' },
  { id: 3, value: 'design&UserExperience', jobName: 'Design & User Experience' },
  { id: 4, value: 'tax', jobName: 'Tax' },
  { id: 5, value: 'bookkeeping', jobName: 'Bookkeeping' },
  { id: 6, value: 'hiringProcess', jobName: 'Hiring Process' },
  { id: 7, value: 'other', jobName: 'Other' },
]

const RegisterFormik = () => {
  const RegisterSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(5, 'Username must be 5 chars at minimum')
      .max(20, 'Username must not exceed 20 chars'),
    email: Yup.string().required('Email is required').email('Invalid email address format'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be 5 chars at minimum')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters'),
    job: Yup.string().required('Username is required'),
    term: Yup.boolean().oneOf([true], 'Read and agree to our terms'),
  })

  return (
    <section className="w-[1170px] max-w-[calc(100%-40px)] py-6 mx-auto">
      <Formik
        initialValues={{ username: '', email: '', password: '', job: '', term: false }}
        onSubmit={(values) => console.log(values)}
        validationSchema={RegisterSchema}
      >
        {({ errors, touched }) => (
          <Form className="w-[400px] mx-auto" noValidate>
            {/* Username */}
            <div className="flex flex-col mt-[10px]">
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
              {/* <p className="h-4 px-1 mt-[2px] text-[#E74C3C] font-normal text-xs">
                {errors.username && touched.username && errors.username}
              </p> */}
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
                placeholder="Enter your email"
              />
              <div className="h-4">
                <ErrorMessage
                  name="email"
                  component="p"
                  className="px-1 mt-[2px] text-[#E74C3C] font-normal text-xs"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col mt-[10px]">
              <label htmlFor="password" className="font-medium text-sm cursor-pointer">
                Password
              </label>
              <Field
                className="p-[15px] mt-[5px] outline-none border border-purple-200 rounded-lg bg-white focus:[box-shadow:_0px_0px_0px_2px_rgba(125,_106,_255,_0.5)] transition-all"
                name="password"
                type="password"
                id="password"
                autoComplete="off"
                placeholder="Enter your password"
              />
              <div className="h-4">
                <ErrorMessage
                  name="password"
                  component="p"
                  className="px-1 mt-[2px] text-[#E74C3C] font-normal text-xs"
                />
              </div>
            </div>

            {/* Your job */}
            <div className="flex flex-col mt-[10px]">
              <label htmlFor="job" className="font-medium text-sm cursor-pointer">
                Your job
              </label>
              <Field
                className="p-[15px] mt-[5px] outline-none border border-purple-200 rounded-lg bg-white focus:[box-shadow:_0px_0px_0px_2px_rgba(125,_106,_255,_0.5)] transition-all"
                name="job"
                id="job"
                placeholder="Enter your job"
                as="select"
              >
                <option value="" hidden>
                  Select your option
                </option>
                <option value="softwareEngineering">Software</option>
                <option value="data">Data</option>
                <option value="design&UserExperience">Design & User Experience</option>
                <option value="tax">Tax</option>
                <option value="bookkeeping">Bookkeeping</option>
                <option value="hiringProcess">Hiring Process</option>
                <option value="other">Other</option>
              </Field>
              <div className="h-4">
                <ErrorMessage
                  name="job"
                  component="p"
                  className="px-1 mt-[2px] text-[#E74C3C] font-normal text-xs"
                />
              </div>
            </div>

            {/* Term */}
            <div className="mt-[10px]">
              <Field
                className="p-4 rounded-md border border-gray-100"
                name="term"
                id="term"
                type="checkbox"
              />
              <label
                htmlFor="term"
                className="inline-block ml-[10px] font-medium text-sm select-none"
              >
                I accept the{' '}
                <a href="#!" className="border-b border-neutral-800">
                  terms and conditions
                </a>
              </label>
              <div className="h-4 mt-[2px]">
                <ErrorMessage
                  name="term"
                  component="p"
                  className="px-1 mt-[2px] text-[#E74C3C] font-normal text-xs"
                />
              </div>
            </div>

            {/* Button submit */}
            <button
              type="submit"
              className="w-full h-[56px] mt-[15px] p-4 bg-purple-600 rounded-lg font-bold text-white text-base"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  )
}

export default RegisterFormik
