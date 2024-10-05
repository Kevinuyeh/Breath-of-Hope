
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthService from '../Auth/AuthService';
import Log from '../Assets/LOGO - 2 2.png';
import Loginimg from '../Assets/Frame Log.png';
import Gimg from '../Assets/google.png';
import { toast } from 'react-toastify';
import { setAuthUser } from '../Auth/LogAuth';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),



    // In your login form component
onSubmit : async (values, { setSubmitting, setErrors }) => {
  try {
    setIsLoading(true);

    // Make sure you're passing values.email and values.password directly
    const res = await AuthService.login(values.email, values.password);

    toast(res?.data?.message);
    if (res?.data?.status === 200) {
      setAuthUser(res?.data?.token);
      window.location.href = "/userpage";
    } else {
      setErrors({ apiError: 'Login failed. Please check your credentials.' });
    }
  } catch (error) {
    console.error('Login failed:', error);
    setErrors({ apiError: 'Login failed. Please try again later.' });
  } finally {
    setIsLoading(false);
    setSubmitting(false);
  }
}

    

    
  });

  return (
    <div className='w-full bg-llblue mt-10 pb-10'>
      <div className='max-w-[1240px] grid md:grid-cols-2 gap-5 mx-auto'>
        <div className="flex flex-col items-center bg-white rounded-md mt-10 font-poppins p-4">
          <img src={Log} alt='/img' className='w-' />
          <h1 className="text-fblue text-center text-2xl md:text-4xl mt-3 mb-4">WELCOME BACK!</h1>
          <p className="text-center max-w-md mb-6">
            We are happy to have you back!
          </p>

          <h1 className='text-darkpurp text-center text-xl '>LOGIN YOUR ACCOUNT</h1>

          <form className="w-full max-w-lg space-y-4 mt-3" onSubmit={formik.handleSubmit}>
            <div className="w-full flex flex-col">
              <label htmlFor="email" className="text-gray-700 mb-1 mt-5">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="p-2 border border-gray-300 rounded-lg"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500">{formik.errors.email}</p>
              ) : null}

              <label htmlFor="password" className="text-gray-700 mb-1 mt-5">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="p-2 border border-gray-300 rounded-lg"
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-500">{formik.errors.password}</p>
              ) : null}
            </div>

            {formik.errors.apiError && (
              <p className="text-red-500 text-center">{formik.errors.apiError}</p>
            )}

            <button
              className="flex items-center justify-center w-full max-w-sm mx-auto my-4 p-3 rounded-lg hover:bg-gray-100"
              type="button"
            >
              <img src={Gimg} alt="Google Icon" className="w-6 h-6 mr-2" />
              <span className="text-gray-700 font-medium">Login with Google</span>
            </button>

            <button
              type="submit"
              className="bg-purp text-white w-[250px] justify-center flex mx-auto py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mt-6"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Logging in...' : 'Login account'}
            </button>
          </form>
        </div>

        <div className="bg-lgreen p-4 md:pl-6 mx-auto mt-10 md:ml-auto lg:w-max">
          <img
            src={Loginimg}
            alt="/img"
            className="bg-lpurp p-6 md:pl-8 w-[500px] block"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
