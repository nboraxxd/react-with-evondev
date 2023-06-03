import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import MyInput from '../input/MyInput'
import MySelect from '../select/MySelect'
import MyCheckbox from '../checkbox/MyCheckbox'

const MyFormik = () => {
  const FormSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(5, 'Username must be 5 chars at minimum')
      .max(20, 'Username must not exceed 20 chars'),
    email: Yup.string().required('Email is required').email('Invalid email address format'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Your password must be 8 chars at minimum')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/, {
        message:
          'Your password must have at least 1 uppercase letter, 1 lowercase letter and 1 number',
      }),
    job: Yup.string().required('Username is required'),
    term: Yup.boolean().oneOf([true], 'Read and agree to our terms'),
  })

  return (
    <section className="w-[1170px] max-w-[calc(100%-40px)] py-6 mx-auto">
      <Formik
        initialValues={{ username: '', email: '', password: '', job: '', term: false }}
        validationSchema={FormSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log(values)
            actions.resetForm()
          }, 1000)
        }}
      >
        {({ isSubmitting }) => (
          <Form className="w-[400px] mx-auto" noValidate>
            {/* Username */}
            <MyInput
              label="Username"
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
            />

            {/* Email address */}
            <MyInput
              label="Email address"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="mt-[10px]"
            />

            {/* Password */}
            <MyInput
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="mt-[10px]"
            />

            {/* Your job */}
            <MySelect label="Your job" id="job" name="job" className="mt-[10px]">
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
            </MySelect>

            {/* Term */}
            <MyCheckbox id="term" name="term" className="mt-[10px]">
              I accept the{' '}
              <a href="#!" className="border-b border-neutral-800">
                terms and conditions
              </a>
            </MyCheckbox>

            {/* Button submit */}
            <button
              type="submit"
              className={`w-full h-[56px] mt-[15px] p-4 ${
                isSubmitting ? 'bg-purple-400' : 'bg-purple-600'
              } bg-purple-600 rounded-lg font-bold text-white text-base`}
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  )
}

export default MyFormik
