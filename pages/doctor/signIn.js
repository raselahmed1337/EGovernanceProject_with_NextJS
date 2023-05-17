import { useForm } from 'react-hook-form';
import axios from 'axios';
import MyLayout from './component/layout';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const router = useRouter();

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      const response = await axios.post('https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/signin/', { email, password });
      const message = response.data.message;

      if (message === 'You have successfully signed in') {
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        router.push('/doctor/dashboard');
      } else {
        setError('Invalid login credentials');
      }
    } catch (error) {
      console.log('error: ' + error.message);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <MyLayout title="Sign In" />

      <div className="p-24">
  <section className="text-gray-600 body-font mx-auto w-96">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-blue-300 rounded-lg p-8 md:ml-auto w-auto mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Sign In
        </h2>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
            className={`w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
              errors.email && 'border-red-500'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">Email is required</p>
          )}
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register('password', { required: true })}
            className={`w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
              errors.password && 'border-red-500'
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">Password is required</p>
          )}
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              {...register('rememberMe')}
              className="h-4 w-4 text-blue-500 focus:ring-blue-600 border-gray-300 rounded"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 text-sm text-gray-600"
            >
              Remember Me
            </label>
          </div>
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot Password
          </a>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
        >
          Sign In
        </button>
        {error && (
          <div>
            <p
              id="outlined_error_help"
              className="mt-2 text-xs text-red-600 dark:text-red-400"
            >
              <span className="font-medium">{error}</span>
            </p>
          </div>
        )}
      </div>
    </form>
  </section>
</div>


    
  </>
);
}