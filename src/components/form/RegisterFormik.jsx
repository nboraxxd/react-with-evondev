import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputFormik from '../input/InputFormik'
import RadioFormik from '../radio/RadioFormik'
import CheckboxFormik from '../checkbox/CheckboxFormik'
import DropdownFormik from '../dropdown/DropdownFormik'

const dataJobs = [
  { id: 1, value: 'softwareEngineering', jobName: 'Software Engineering' },
  { id: 2, value: 'data', jobName: 'Data' },
  { id: 3, value: 'design&UserExperience', jobName: 'Design & User Experience' },
  { id: 4, value: 'tax', jobName: 'Tax' },
  { id: 5, value: 'bookkeeping', jobName: 'Bookkeeping' },
  { id: 6, value: 'hiringProcess', jobName: 'Hiring Process' },
  { id: 7, value: 'other', jobName: 'Other' },
]

const valueJobList = dataJobs.map((item) => item.value)

const RegisterFormik = () => {
  const USERNAME_MIN_LENGTH = 5
  const USERNAME_MAX_LENGTH = 20
  const PASSWORD_MIN_LENGTH = 8

  const RegisterSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(USERNAME_MIN_LENGTH, 'Username must be 5 chars at minimum')
      .max(USERNAME_MAX_LENGTH, 'Username must not exceed 20 chars'),
    email: Yup.string().required('Email address is required').email('Invalid email address format'),
    password: Yup.string()
      .required('Password is required')
      .min(PASSWORD_MIN_LENGTH, 'Your password must be 8 chars at minimum')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol'),
    gender: Yup.string()
      .required('Please select your gender')
      .oneOf(['male', 'female'], 'You can select male or female'),
    job: Yup.string()
      .required('Please select your job')
      .oneOf(valueJobList, 'Please double check your selection'),
    term: Yup.boolean().oneOf([true], 'Read and agree to our terms'),
  })

  return (
    <section className="w-[1170px] max-w-[calc(100%-40px)] py-6 mx-auto">
      <h1 className="font-semibold text-5xl leading-normal text-center">Register Form</h1>
      <Formik
        initialValues={{ username: '', email: '', password: '', gender: '', job: '', term: false }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log(values, actions)
            actions.resetForm()
          }, 1000)
        }}
      >
        {(props) => {
          console.log(props)
          const watchGender = props.values?.gender

          return (
            <Form className="w-[300px] mx-auto mt-[40px]" noValidate>
              {/* Username */}
              <InputFormik
                label="Username"
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                autoComplete="username"
              />

              {/* Email address */}
              <InputFormik
                label="Email address"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                autoComplete="email"
                className="mt-[10px]"
              />

              {/* Password */}
              <InputFormik
                label="Password"
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="new-password"
                className="mt-[10px]"
              />

              {/* Gender */}
              <div className="flex flex-col mt-[10px]">
                <label className="font-medium text-sm select-none">Gender</label>
                <div className="flex items-center gap-x-[20px] mt-[5px] ml-[7px]">
                  {/* Male */}
                  <RadioFormik
                    id="male"
                    name="gender"
                    value="male"
                    checked={watchGender === 'male'}
                  />
                  {/* Female */}
                  <RadioFormik
                    id="female"
                    name="gender"
                    value="female"
                    checked={watchGender === 'female'}
                  />
                </div>
                <p className="h-4 px-1 mt-[2px] text-[#E74C3C] font-normal text-xs">
                  {(props.touched.gender && props.errors.gender) || ''}
                </p>
              </div>

              {/* Dropdown select */}
              <DropdownFormik
                name="job"
                dataJobs={dataJobs}
                labelContent="Your job"
                labelDefault="Select your job"
                setValue={props.setFieldValue}
              />

              {/* Term */}
              <CheckboxFormik id="term" name="term">
                I accept the{' '}
                <a href="#!" className="underline">
                  terms and conditions
                </a>
              </CheckboxFormik>

              {/* Button submit */}
              <button
                type="submit"
                className={`w-full h-[56px] mt-[15px] p-4 rounded-lg font-bold text-white text-base ${
                  props.isSubmitting ? 'bg-purple-400' : 'bg-purple-600'
                }`}
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? (
                  <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
                ) : (
                  'Submit'
                )}
              </button>
            </Form>
          )
        }}
      </Formik>
    </section>
  )
}

export default RegisterFormik
