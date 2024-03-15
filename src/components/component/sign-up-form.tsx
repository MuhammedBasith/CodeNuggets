'use client'

import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import { useSearchParams } from 'next/navigation'

export default function SignupFormDemo() {
  const searchParams = useSearchParams()
  const search = searchParams.get('ref')


  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    collegeName: "",
    referralCode: "" || search,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    // Here you can perform additional validation or submit the form data
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-xl w-full mx-4 md:mx-auto mt-0 md:mt-16 rounded-lg p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
          Register for Exclusive Python Live Class
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 text-sm mb-6">
          Join our community and unlock exclusive benefits today! Act now to secure your spot
        </p>
        <form className="my-8" onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="fullname">Full name</Label>
              <Input id="fullname" placeholder="Alan" type="text" value={formData.fullname} onChange={handleChange} required />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="learnpython@gmail.com" type="email" value={formData.email} onChange={handleChange} required />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input id="phoneNumber" placeholder="9744159754" type="tel" value={formData.phoneNumber} onChange={handleChange} required />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="collegeName">College Name</Label>
            <Input id="collegeName" placeholder="College of Engineering Trivandrum" type="text" value={formData.collegeName} onChange={handleChange} required />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="referralCode">Referral Code (Optional)</Label>
            <Input
              id="referralCode"
              placeholder="(Optional)"
              type="text"
              value={formData.referralCode || ''}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <button
            className="relative group/btn bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] hover:scale-105 transition-transform duration-300"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>
          <p className="flex items-center justify-center mt-6 text-sm leading-6 text-gray-500">
            PS. There are only limited seats available.
          </p>

        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
