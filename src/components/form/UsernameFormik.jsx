import { useFormik } from 'formik'
import React from 'react'

const dataJobs = [
  { id: 1, value: 'softwareEngineering', jobName: 'Software Engineering' },
  { id: 2, value: 'data', jobName: 'Data' },
  { id: 3, value: 'design&UserExperience', jobName: 'Design & User Experience' },
  { id: 4, value: 'tax', jobName: 'Tax' },
  { id: 5, value: 'bookkeeping', jobName: 'Bookkeeping' },
  { id: 6, value: 'hiringProcess', jobName: 'Hiring Process' },
  { id: 7, value: 'other', jobName: 'Other' },
]

const validate = (values, touched) => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Please enter your username'
  }

  if (values.username.length > 20) {
    errors.username = 'Username must not exceed 20 characters'
  }

  if (!values.email) {
    errors.email = 'Please enter your email'
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Your email is not valid'
  }

  return errors
}

const UsernameFormik = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
    },
    validate,
    onSubmit: (values) => {
      console.log({ username: values.username, email: values.email })
    },
  })

  console.log(formik)

  return (
    <section className="w-[1170px] max-w-[calc(100%-40px)] py-6 mx-auto">
      <form className="w-[400px] mx-auto" noValidate onSubmit={formik.handleSubmit}>
        {/* Username */}
        <div className="flex flex-col">
          <label htmlFor="username" className="font-medium text-sm cursor-pointer">
            Username
          </label>
          <input
            className="p-[15px] mt-[5px] outline-none border border-purple-200 rounded-lg bg-white focus:[box-shadow:_0px_0px_0px_2px_rgba(125,_106,_255,_0.5)] transition-all"
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            placeholder="Enter your username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className="h-4 px-1 mt-[2px] text-[#E74C3C] font-normal text-xs">
            {(formik.touched?.username && formik.errors?.username) || ''}
          </p>
        </div>

        {/* Email address */}
        <div className="flex flex-col mt-[10px]">
          <label htmlFor="email" className="font-medium text-sm cursor-pointer">
            Email address
          </label>
          <input
            className="p-[15px] mt-[5px] outline-none border border-purple-200 rounded-lg bg-white focus:[box-shadow:_0px_0px_0px_2px_rgba(125,_106,_255,_0.5)] transition-all"
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className="h-4 px-1 mt-[2px] text-[#E74C3C] font-normal text-xs">
            {(formik.touched?.email && formik.errors?.email) || ''}
          </p>
        </div>

        {/* Password */}
        {/* <div className="flex flex-col gap-[5px] mt-[25px]">
          <label htmlFor="password" className="font-medium text-sm cursor pointer">
            Password
          </label>
          <input
            className="p-[15px] outline-none border border-purple-200 rounded-lg bg-white focus:[box-shadow:_0px_0px_0px_2px_rgba(125,_106,_255,_0.5)] transition-all"
            type="password"
            id="password"
            name="password"
            autoComplete="new-password"
            placeholder="Enter your password"
          />
          <span className="text-xs font-normal text-[#E74C3C]">Please enter your password</span>
        </div> */}

        {/* Gender radio */}
        {/* <div className="flex flex-col gap-[5px] mt-[25px]">
          <label className="font-medium text-sm cursor pointer">Gender</label>
          <div className="flex item-center gap-4">
            <label className="ml-[5px] flex items-center gap-2">
              <label className="custom-radio">
                <input type="radio" id="male" name="gender" value="male" className="hidden" />
                <div className="bg-gray-200 w-full h-full rounded-full"></div>
              </label>
              <label htmlFor="male" className="cursor-pointer">
                Male
              </label>
            </label>

            <label className="ml-[5px] flex items-center gap-2">
              <label className="custom-radio">
                <input type="radio" id="female" name="gender" value="female" className="hidden" />
                <div className="bg-gray-200 w-full h-full rounded-full"></div>
              </label>
              <label htmlFor="female" className="cursor-pointer">
                Female
              </label>
            </label>

            <label className="ml-[5px] flex items-center gap-2">
              <label className="custom-radio">
                <input id="other" name="gender" value="other" type="radio" className="hidden" />
                <div className="bg-gray-200 w-full h-full rounded-full"></div>
              </label>
              <label htmlFor="other" className="cursor-pointer">
                Other
              </label>
            </label>
          </div>

          <span className="text-xs font-normal text-[#E74C3C]">{errors.gender?.message}</span>
        </div> */}

        {/* Dropdown select */}
        {/* <div className="flex flex-col gap-[5px] mt-[25px]">
          <label className="cursor-pointer">Are you</label>
          <div className="relative" ref={nodeRef}>
        <div
          onClick={() => setShow(!show)}
          className={`mb-[2px] p-[15px] rounded-lg border border-purple-200 bg-white flex items-center justify-between cursor-pointer transition-all ${
            show && '[box-shadow:_0px_0px_0px_2px_rgba(125,_106,_255,_0.5)]'
          }`}
        >
          {!jobValue ? <span className="text-[#999]">Select your job</span> : <span>{label}</span>}
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
              stroke={!jobValue ? '#999' : '#292D32'}
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
          {dataJobs.map((item) => {
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

          {errors.job && (
            <span className="text-xs font-normal text-[#E74C3C]">{errors.job?.message}</span>
          )}
        </div> */}

        {/* terms and conditions */}
        {/* <div className="mt-[25px]">
          <CheckboxHook
            id="terms"
            name="terms"
            text="I accept the "
            termsLink="terms and conditions"
            control={control}
            defaultValue={false}
          ></CheckboxHook>

          {errors.terms && (
            <span className="text-xs font-normal text-[#E74C3C]">{errors.terms?.message}</span>
          )}
        </div> */}

        {/* Button submit */}
        <button
          type="submit"
          className="w-full h-[56px] mt-[10px] p-4 bg-purple-600 rounded-lg font-bold text-white text-base"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default UsernameFormik
