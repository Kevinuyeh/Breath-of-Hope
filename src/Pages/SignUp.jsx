import React from 'react'
import Log from '../Assets/LOGO - 2 2.png'
import Loginimg from '../Assets/Frame Log.png'
import Gimg from '../Assets/google.png'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <div className='w-full bg-llblue mt-10 pb-10'>
            <div className='max-w-[1240px] grid md:grid-cols-2 gap-5 mx-auto'>
                <div className="flex flex-col items-center bg-white rounded-md mt-10 font-poppins p-4">
                    <img src={Log} alt='/img' className='w-' />
                    <h1 className="text-fblue text-center text-2xl md:text-4xl mt-3 mb-4">WELCOME BACK!</h1>
                    <p className="text-center max-w-md mb-6">
                        We are happy to have you join us!
                    </p>

                    <h1 className='text-darkpurp text-center text-xl '>SIGN UP YOUR ACCOUNT</h1>

                    <form className="w-full max-w-lg space-y-4 mt-3">
                        <div className="flex flex-col md:flex-row gap-4">

                            <div className="w-full md:w-1/2 flex flex-col">
                                <label htmlFor="firstName" className="text-gray-700 mb-1">
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    className="p-2 border border-gray-300 rounded-lg"
                                />
                            </div>


                            <div className="w-full md:w-1/2 flex flex-col">
                                <label htmlFor="lastName" className="text-gray-700 mb-1">
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    className="p-2 border border-gray-300 rounded-lg"
                                />
                            </div>


                        </div>
                        <div className="w-full flex flex-col">
                            <label htmlFor="email" className="text-gray-700 mb-1 mt-5">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="p-2 border border-gray-300 rounded-lg"
                            />
                            <label htmlFor="password" className="text-gray-700 mb-1 mt-5">
                                Password
                            </label>
                            <input
                                className="p-2 border border-gray-300 rounded-lg"
                                id="password"
                                type="password"
                            />

                            <div className="flex items-center justify-center w-full my-2">

                                <div className="flex-1 border-t border-gray-700 mx-4"></div>

                                <span className="text- font-medium">OR</span>

                                <div className="flex-1 border-t border-gray-700 mx-4"></div>
                            </div>
                        </div>

                        <button className="flex items-center justify-center w-full max-w-sm mx-auto my-4 p-3 rounded-lg hover:bg-gray-100">

                            <img
                                src={Gimg}
                                alt="Google Icon"
                                className="w-6 h-6 mr-2"
                            />
                            <span className="text-gray-700 font-medium">Sign Up with Google</span>
                        </button>


                        <button
                            type="submit"
                            className="bg-purp text-white w-[250px] justify-center flex mx-auto py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mt-6"
                        >
                            Sign Up
                        </button>

                        <h1 className='text-center text-darkpurp'>Already have an account? <Link to='/login'><span className='text-lightpurp'>Login account</span></Link></h1>
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
    )
}

export default SignUp