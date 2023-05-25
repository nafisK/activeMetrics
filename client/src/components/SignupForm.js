import logo from '../assets/activeMetrics.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function SignupForm({ setForm }) {
    const navigate = useNavigate()
    const handleSignup = e => {
        e.preventDefault()

        // Collect input values
        const firstName = document.getElementById('first-name').value
        const lastName = document.getElementById('last-name').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const username = document.getElementById('username').value
        const dateOfBirth = document.getElementById('date-of-birth').value

        // Check if all fields have data
        if (
            firstName &&
            lastName &&
            email &&
            password &&
            username &&
            dateOfBirth
        ) {
            // Create data object
            const data = {
                username: username,
                email: email,
                password: password,
                first_name: firstName,
                last_name: lastName,
                date_of_birth: dateOfBirth,
            }

            // Make API request using Axios
            axios
                .post(`http://localhost:4000/user`, data)
                .then(response => {
                    // Handle successful response
                    console.log('Signup successful:', response.data)

                    // cache user data in local storage
                    localStorage.setItem('user', JSON.stringify(response.data))

                    // Navigate to home page
                    navigate('/home')
                })
                .catch(error => {
                    // Handle error
                    console.log('Signup failed:', error)
                })
        } else {
            console.log('Please fill in all fields.')
        }
    }

    return (
        <form>
            <div className='space-y-12'>
                <div className='pb-12 border-b border-gray-900/10'>
                    <img src={logo} className='mx-auto w-36' alt='logo' />
                    <h2 className='mb-5 text-base font-semibold leading-7 text-gray-900'>
                        Personal Information
                    </h2>

                    {/* First Name */}
                    <div className='grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6'>
                        <div className='sm:col-span-3'>
                            <label
                                htmlFor='first-name'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                First name
                            </label>
                            <div className='mt-2'>
                                <input
                                    type='text'
                                    name='first-name'
                                    id='first-name'
                                    autoComplete='given-name'
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>

                        {/* Last Name */}
                        <div className='sm:col-span-3'>
                            <label
                                htmlFor='last-name'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                Last name
                            </label>
                            <div className='mt-2'>
                                <input
                                    type='text'
                                    name='last-name'
                                    id='last-name'
                                    autoComplete='family-name'
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className='sm:col-span-3'>
                            <label
                                htmlFor='email'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                Email address
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='email'
                                    name='email'
                                    type='email'
                                    autoComplete='email'
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className='sm:col-span-3'>
                            <label
                                htmlFor='password'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                Password
                            </label>
                            <div className='mt-2'>
                                <input
                                    type='password'
                                    name='password'
                                    id='password'
                                    autoComplete='new-password'
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>

                        {/* Username */}
                        <div className='sm:col-span-4'>
                            <label
                                htmlFor='username'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                Username
                            </label>
                            <div className='mt-2'>
                                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-600 sm:max-w-md'>
                                    <span className='flex items-center pl-3 text-gray-500 select-none sm:text-sm'></span>
                                    <input
                                        type='text'
                                        name='username'
                                        id='username'
                                        autoComplete='username'
                                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                                        placeholder='janesmith'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='sm:col-span-6'>
                            <label
                                htmlFor='date-of-birth'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                Date of Birth
                            </label>
                            <div className='mt-2'>
                                <input
                                    type='date'
                                    name='date-of-birth'
                                    id='date-of-birth'
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-end mt-6 gap-x-6'>
                <button
                    type='button'
                    className='text-sm font-semibold leading-6 text-gray-900'
                    onClick={() => setForm('login')}
                >
                    Cancel
                </button>
                <button
                    type='submit'
                    onClick={handleSignup}
                    className='px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-cyan-500 hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600'
                >
                    Create
                </button>
            </div>
        </form>
    )
}
