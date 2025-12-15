import { Link } from "react-router";
import { BsArrowLeft } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useAuth from "../../../hook/useAuth";
import Swal from "sweetalert2";
import { imageUpload } from "../../../utils";



const Register = () => {
  const { registerUser, sigInWIthGoogle, updateUserProfile, } = useAuth()
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    //console.log("Register Data:", data);
    const { email, name, password, photo } = data
    const imageFile = photo[0]

    try {
      const imageURL = await imageUpload(imageFile)
      await registerUser(email, password)
      await updateUserProfile({
        displayName: name,
        photoURL: imageURL,
      })

      navigate('/')
      Swal.fire({
        title: "Registration Successful",
        icon: "success",
      });
    } catch (err) {
      console.log(err.message)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message ||  "Something went wrong!",
      });
    }
  }
  





return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
    <Link
      to="/"
      className="absolute top-6 left-6 flex items-center gap-2 text-primary hover:underline"
    >
      <BsArrowLeft className="text-lg" />
      <span className="font-medium">Back to Home</span>
    </Link>
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">

      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Create an Account ✨
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Join <span className="text-primary font-semibold">Book2Door</span> and start reading
        </p>
      </div>


      {/* Form */}
      <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Full Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Your full name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email Address
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Photo URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Profile Image
          </label>

          <input
            type="file"
            accept="image/*"
            {...register("photo", {
              required: "Profile image is required",
            })}
            className="
      block w-full text-sm
      border border-gray-400 rounded-lg
      bg-white text-gray-700
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:bg-primary file:text-white file:font-semibold
      hover:file:bg-primary-dark
      focus:outline-none focus:ring-2 focus:ring-primary
      dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200
      cursor-pointer
    "
          />

          {errors.photo && (
            <p className="text-xs text-red-500 mt-1">
              {errors.photo.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            type="password"
            placeholder="******"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          {errors.password && (
            <p className="text-xs text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-lg font-medium transition"
        >
          Sign Up
        </button>
      </form>

      {/* Divider */}
      <div className="my-6 flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600" />
        <span className="text-sm text-gray-500">OR</span>
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600" />
      </div>

      {/* Google Sign Up */}
      <button
        className="w-full border border-gray-300 dark:border-gray-600 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        <span className="text-gray-700 dark:text-gray-200 font-medium">
          Sign up with Google
        </span>
      </button>

      {/* Login Redirect */}
      <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-6">
        Already have an account?{" "}
        <Link to="/login" className="text-primary font-medium hover:underline">
          Login
        </Link>
      </p>
    </div>
  </div>
);
};

export default Register;
