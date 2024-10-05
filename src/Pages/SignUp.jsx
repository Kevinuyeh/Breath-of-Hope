// import React from 'react';
// import Log from '../Assets/LOGO - 2 2.png';
// import Loginimg from '../Assets/Frame Log.png';
// import Gimg from '../Assets/google.png';


// function SignUp() {

//   return (
//     <div className='w-full bg-llblue mt-10 pb-10'>
//       <div className='max-w-[1240px] grid md:grid-cols-2 gap-5 mx-auto'>
//         <div className="flex flex-col items-center bg-white rounded-md mt-10 font-poppins p-4">
//           <img src={Log} alt='/img' className='w-' />
//           <h1 className="text-fblue text-center text-2xl md:text-4xl mt-3 mb-4">WELCOME!</h1>
//           <p className="text-center max-w-md mb-6">
//             We are happy to have you join us!
//           </p>

//           <h1 className='text-darkpurp text-center text-xl '>SIGN UP YOUR ACCOUNT</h1>



//           <form className="w-full max-w-lg space-y-4 mt-3">
//             <div className="flex flex-col md:flex-row gap-4">

//               <div className="w-full md:w-1/2 flex flex-col">
//                 <label htmlFor="firstName" className="text-gray-700 mb-1">
//                   First Name
//                 </label>
//                 <input
//                   id="firstName"
//                   type="text"
//                   className="p-2 border border-gray-300 rounded-lg"
//                   required
//                 />
//               </div>

//               <div className="w-full md:w-1/2 flex flex-col">
//                 <label htmlFor="lastName" className="text-gray-700 mb-1">
//                   Last Name
//                 </label>
//                 <input
//                   id="lastName"
//                   type="text"
//                   className="p-2 border border-gray-300 rounded-lg"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="w-full flex flex-col">
//               <label htmlFor="email" className="text-gray-700 mb-1 mt-5">
//                 Email Address
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 className="p-2 border border-gray-300 rounded-lg"
//                 required
//               />

//               <label htmlFor="password" className="text-gray-700 mb-1 mt-5">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 className="p-2 border border-gray-300 rounded-lg"
//                 required
//               />

//               <div className="flex items-center justify-center w-full my-2">
//                 <div className="flex-1 border-t border-gray-700 mx-4"></div>
//                 <span className="text- font-medium">OR</span>
//                 <div className="flex-1 border-t border-gray-700 mx-4"></div>
//               </div>
//             </div>

//             <button className="flex items-center justify-center w-full max-w-sm mx-auto my-4 p-3 rounded-lg hover:bg-gray-100">
//               <img src={Gimg} alt="Google Icon" className="w-6 h-6 mr-2" />
//               <span className="text-gray-700 font-medium">Sign Up with Google</span>
//             </button>

//             <button
//               type="submit"
//               className="bg-purp text-white w-[250px] justify-center flex mx-auto py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mt-6"
//             >
//               Sign Up
//             </button>

//             <h1 className='text-center text-darkpurp'>
//               Already have an account? <span className='text-lightpurp'>Login account</span>
//             </h1>
//           </form>
//         </div>

//         <div className="bg-lgreen p-4 md:pl-6 mx-auto mt-10 md:ml-auto lg:w-max">
//           <img src={Loginimg} alt="/img" className="bg-lpurp p-6 md:pl-8 w-[500px] block" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
















// import React, { useState } from 'react';
// import AuthService from '../Auth/AuthService';
// import Log from '../Assets/LOGO - 2 2.png';
// import Loginimg from '../Assets/Frame Log.png';
// import Gimg from '../Assets/google.png';
// // import { Link } from 'react-router-dom';

// function SignUp() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await AuthService.signUp(firstName, lastName, email, password, confirmPassword);
//       console.log('Signup successful:', response.data);
//       // Handle successful signup (e.g., redirect, store token)
//     } catch (error) {
//       console.error('Signup failed:', error);
//       // Handle signup failure (e.g., show error message)
//     }
//   };

//   return (
//     <div className='w-full bg-llblue mt-10 pb-10'>
//       <div className='max-w-[1240px] grid md:grid-cols-2 gap-5 mx-auto'>
//         <div className="flex flex-col items-center bg-white rounded-md mt-10 font-poppins p-4">
//           <img src={Log} alt='/img' className='w-' />
//           <h1 className="text-fblue text-center text-2xl md:text-4xl mt-3 mb-4">WELCOME!</h1>
//           <p className="text-center max-w-md mb-6">
//             We are happy to have you join us!
//           </p>

//           <h1 className='text-darkpurp text-center text-xl '>SIGN UP YOUR ACCOUNT</h1>

//           <form className="w-full max-w-lg space-y-4 mt-3" onSubmit={handleSubmit}>
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full md:w-1/2 flex flex-col">
//                 <label htmlFor="firstName" className="text-gray-700 mb-1">
//                   First Name
//                 </label>
//                 <input
//                   id="firstName"
//                   type="text"
//                   className="p-2 border border-gray-300 rounded-lg"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="w-full md:w-1/2 flex flex-col">
//                 <label htmlFor="lastName" className="text-gray-700 mb-1">
//                   Last Name
//                 </label>
//                 <input
//                   id="lastName"
//                   type="text"
//                   className="p-2 border border-gray-300 rounded-lg"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="w-full flex flex-col">
//               <label htmlFor="email" className="text-gray-700 mb-1 mt-5">
//                 Email Address
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 className="p-2 border border-gray-300 rounded-lg"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />

//               <label htmlFor="password" className="text-gray-700 mb-1 mt-5">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 className="p-2 border border-gray-300 rounded-lg"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />

//               <label htmlFor="confirmPassword" className="text-gray-700 mb-1 mt-5">
//                 Confirm Password
//               </label>
//               <input
//                 id="confirmPassword"
//                 type="password"
//                 className="p-2 border border-gray-300 rounded-lg"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </div>

//             {/* <button className="flex items-center justify-center w-full max-w-sm mx-auto my-4 p-3 rounded-lg hover:bg-gray-100">
//               <img src={Gimg} alt="Google Icon" className="w-6 h-6 mr-2" />
//               <span className="text-gray-700 font-medium">Sign Up with Google</span>
//             </button> */}

//             <button
//               type="submit"
//               className="bg-purp text-white w-[250px] justify-center flex mx-auto py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mt-6"
//             >
//               Sign Up
//             </button>

//           </form>
//         </div>

//         <div className="bg-lgreen p-4 md:pl-6 mx-auto mt-10 md:ml-auto lg:w-max">
//           <img src={Loginimg} alt="/img" className="bg-lpurp p-6 md:pl-8 w-[500px] block" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;












































































// import React, { useState } from 'react';
// import AuthService from '../Auth/AuthService'; // Ensure this service works
// import Log from '../Assets/LOGO - 2 2.png';
// import Loginimg from '../Assets/Frame Log.png';

// function SignUp() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     // Simple validation to ensure passwords match
//     if (password !== confirmPassword) {
//       setErrorMessage("Passwords do not match!");
//       return;
//     }

//     try {
//       const response = await AuthService.signUp({
//         firstName, 
//         lastName, 
//         email, 
//         password,
//         confirmPassword
//       });
//       console.log('Signup successful:', response.data);
//       // Redirect or show success message
//     } catch (error) {
//       console.error('Signup failed:', error);
//       setErrorMessage("Signup failed. Please try again later.");
//     }
//   };

//   return (
//     <div className='w-full bg-llblue mt-10 pb-10'>
//       <div className='max-w-[1240px] grid md:grid-cols-2 gap-5 mx-auto'>
//         <div className="flex flex-col items-center bg-white rounded-md mt-10 font-poppins p-4">
//           <img src={Log} alt='/img' className='w-' />
//           <h1 className="text-fblue text-center text-2xl md:text-4xl mt-3 mb-4">WELCOME!</h1>
//           <p className="text-center max-w-md mb-6">We are happy to have you join us!</p>

//           <h1 className='text-darkpurp text-center text-xl '>SIGN UP YOUR ACCOUNT</h1>

//           <form className="w-full max-w-lg space-y-4 mt-3" onSubmit={handleSubmit}>
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full md:w-1/2 flex flex-col">
//                 <label htmlFor="firstName" className="text-gray-700 mb-1">First Name</label>
//                 <input
//                   id="firstName"
//                   type="text"
//                   className="p-2 border border-gray-300 rounded-lg"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="w-full md:w-1/2 flex flex-col">
//                 <label htmlFor="lastName" className="text-gray-700 mb-1">Last Name</label>
//                 <input
//                   id="lastName"
//                   type="text"
//                   className="p-2 border border-gray-300 rounded-lg"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="w-full flex flex-col">
//               <label htmlFor="email" className="text-gray-700 mb-1 mt-5">Email Address</label>
//               <input
//                 id="email"
//                 type="email"
//                 className="p-2 border border-gray-300 rounded-lg"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />

//               <label htmlFor="password" className="text-gray-700 mb-1 mt-5">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 className="p-2 border border-gray-300 rounded-lg"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />

//               <label htmlFor="confirmPassword" className="text-gray-700 mb-1 mt-5">Confirm Password</label>
//               <input
//                 id="confirmPassword"
//                 type="password"
//                 className="p-2 border border-gray-300 rounded-lg"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </div>

//             {errorMessage && (
//               <p className="text-red-500 text-center">{errorMessage}</p>
//             )}

//             <button
//               type="submit"
//               // onClick={handleSubmit}
//               className="bg-purp text-white w-[250px] justify-center flex mx-auto py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mt-6"
//             >
//               Sign Up
//             </button>
//           </form>
//         </div>

//         <div className="bg-lgreen p-4 md:pl-6 mx-auto mt-10 md:ml-auto lg:w-max">
//           <img src={Loginimg} alt="/img" className="bg-lpurp p-6 md:pl-8 w-[500px] block" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;






















import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthService from '../Auth/AuthService'; // Ensure this service works
import Log from '../Assets/LOGO - 2 2.png';
import Loginimg from '../Assets/Frame Log.png';

function SignUp() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await AuthService.signUp(
          values.firstName,
          values.lastName,
          values.email,
          values.password,
          values.confirmPassword
        );
        console.log('Signup successful:', response.data);
        // Handle success (e.g., redirect or show a message)
      } catch (error) {
        console.error('Signup failed:', error);
        setErrors({ apiError: 'Signup failed. Please try again later.' });
      }
      setSubmitting(false);
    },
  });

  return (
    <div className='w-full bg-llblue mt-10 pb-10'>
      <div className='max-w-[1240px] grid md:grid-cols-2 gap-5 mx-auto'>
        <div className="flex flex-col items-center bg-white rounded-md mt-10 font-poppins p-4">
          <img src={Log} alt='/img' className='w-' />
          <h1 className="text-fblue text-center text-2xl md:text-4xl mt-3 mb-4">WELCOME!</h1>
          <p className="text-center max-w-md mb-6">We are happy to have you join us!</p>

          <h1 className='text-darkpurp text-center text-xl '>SIGN UP YOUR ACCOUNT</h1>

          <form className="w-full max-w-lg space-y-4 mt-3" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2 flex flex-col">
                <label htmlFor="firstName" className="text-gray-700 mb-1">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  className="p-2 border border-gray-300 rounded-lg"
                  {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <p className="text-red-500">{formik.errors.firstName}</p>
                ) : null}
              </div>

              <div className="w-full md:w-1/2 flex flex-col">
                <label htmlFor="lastName" className="text-gray-700 mb-1">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  className="p-2 border border-gray-300 rounded-lg"
                  {...formik.getFieldProps('lastName')}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <p className="text-red-500">{formik.errors.lastName}</p>
                ) : null}
              </div>
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="email" className="text-gray-700 mb-1 mt-5">Email Address</label>
              <input
                id="email"
                type="email"
                className="p-2 border border-gray-300 rounded-lg"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500">{formik.errors.email}</p>
              ) : null}

              <label htmlFor="password" className="text-gray-700 mb-1 mt-5">Password</label>
              <input
                id="password"
                type="password"
                className="p-2 border border-gray-300 rounded-lg"
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-500">{formik.errors.password}</p>
              ) : null}

              <label htmlFor="confirmPassword" className="text-gray-700 mb-1 mt-5">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                className="p-2 border border-gray-300 rounded-lg"
                {...formik.getFieldProps('confirmPassword')}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <p className="text-red-500">{formik.errors.confirmPassword}</p>
              ) : null}
            </div>

            {formik.errors.apiError && (
              <p className="text-red-500 text-center">{formik.errors.apiError}</p>
            )}

            <button
              type="submit"
              className="bg-purp text-white w-[250px] justify-center flex mx-auto py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mt-6"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
        </div>

        <div className="bg-lgreen p-4 md:pl-6 mx-auto mt-10 md:ml-auto lg:w-max">
          <img src={Loginimg} alt="/img" className="bg-lpurp p-6 md:pl-8 w-[500px] block" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;

