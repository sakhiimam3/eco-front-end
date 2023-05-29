"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Handle sign in logic
    console.log(values);
    resetForm();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-300 via-white to-pink-300">
      <div>
        <img
          className="hidden h-8 w-auto lg:block"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
      </div>
      <h1 className="text-3xl font-bold mb-6 text-[purple]">Sign In</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-80">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-purple-600 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none w-full focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg px-3 py-2"
          >
            Sign In
          </button>
        </Form>
      </Formik>
      <p className="mt-4">
        Don't have an account?{" "}
        <Link href="/signup">
          <button className="text-blue-500 underline">Sign up</button>
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
