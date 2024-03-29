import { Link } from "react-router-dom";
import {
  ColImgForm,
  FormBrand,
  SubmitForm,
  FormLabel,
  InputGroup,
  Input,
} from "../../components";
import { useAuth, useFormLocal, useToggle } from "../../hooks/";

const SignUpPage = () => {
  const { handleSubmit, errors, register } = useFormLocal();

  const { signUpUser } = useAuth();

  const { toggleView, view } = useToggle();

  return (
    <div className="flex my-9 overflow-hidden bg-white dark:bg-gray-800">
      {/* Side img */}
      <ColImgForm />

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        {/* Form Brand */}
        <FormBrand />

        {/* Google BTN */}
        <Link
          to="#"
          className="flex items-center justify-center mt-4 text-gray-600 rounded-lg border dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          {/* Goggle SVG */}
          <div className="px-4 py-2">
            <svg className="w-6 h-6" viewBox="0 0 40 40">
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#FFC107"
              />
              <path
                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                fill="#FF3D00"
              />
              <path
                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                fill="#4CAF50"
              />
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#1976D2"
              />
            </svg>
          </div>

          <span className="w-5/6 px-4 py-3 font-bold text-center">
            Sign in with Google
          </span>
        </Link>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

          <p
            to="#"
            className="text-sm text-center text-gray-500 uppercase dark:text-gray-400"
          >
            or login with email
          </p>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>

        <form onSubmit={handleSubmit(signUpUser)}>
          <InputGroup>
            <FormLabel isFor="firstName">First Name</FormLabel>

            <Input
              type="text"
              className="block w-full px-4 py-2 text-gray-700  bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              register={register("firstName", {
                maxLength: 25,
                required: true,
              })}
            />
            {errors.firstName?.message}
          </InputGroup>

          <InputGroup>
            <FormLabel isFor="lastName">Last Name</FormLabel>

            <Input
              type="text"
              className="block w-full px-4 py-2 text-gray-700  bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              register={register("lastName", {
                minLength: 5,
                maxLength: 25,
                required: true,
              })}
            />
            {errors.lastName?.message}
          </InputGroup>

          <InputGroup>
            <FormLabel isFor="email">Email Address</FormLabel>

            <Input
              type="email"
              className="block w-full px-4 py-2 text-gray-700  bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              register={register("email", {
                maxLength: 25,
                required: true,
              })}
            />
            {errors.email?.message}
          </InputGroup>

          <InputGroup>
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                for="loggingPassword"
              >
                Password
              </label>
              <Link
                to="/forgotpwd"
                className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
              >
                Forget Password?
              </Link>
            </div>

            <span className="flex text-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300  ">
              <Input
                type="password"
                showpassword={view}
                className="block w-full focus:outline-none px-4  border border-r-0   rounded-md rounded-r-none
              dark:border-gray-600 py-2 focus:border-blue-500 dark:focus:border-blue-500"
                register={register("password", {
                  minLength: 7,
                  maxLength: 25,
                  required: true,
                })}
              />
              <span
                className="py-2 px-4 border border-l-0 rounded-md rounded-l-none text-white dark:border-gray-600 bg-gray-700 hover:bg-gray-600 focus:bg-gray-600"
                onClick={toggleView}
              >
                👁
              </span>
            </span>
            {errors.password?.message}
          </InputGroup>

          <InputGroup>
            <FormLabel isFor="confirmPassword">Confirm Password</FormLabel>

            <Input
              type="password"
              className="block w-full px-4 py-2 text-gray-700  bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              showpassword={view}
              register={register("confirmPassword", {
                minLength: 7,
                maxLength: 25,
                required: true,
              })}
            />
            {errors.confirmPassword?.message}
          </InputGroup>
          {/* Form Submit btn */}
          <SubmitForm>Sign Up</SubmitForm>
        </form>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

          <Link
            to="/signup"
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or sign up
          </Link>

          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
