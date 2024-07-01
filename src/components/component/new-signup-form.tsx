'use client'

import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { Spinner } from '@chakra-ui/react'
import { useEffect } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from '@chakra-ui/react'


export default function SignupFormDemo() {
  return (
    <Suspense fallback={<Spinner size='xl' />}>
      <SignupFormContent />
    </Suspense>
  );
}

function SignupFormContent() { // Moved the content into a separate component
  const searchParams = useSearchParams()
  const toast = useToast()
  const search = searchParams.get('ref')
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    collegeName: "",
    uniquecode: "",
    referralCode: null || search,
  });

  const [loading, setLoading] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [copied, setCopied] = useState(false);

  // Function to copy referral link to clipboard
  const copyReferralLink = () => {
    const referralLink = `${window.location.origin}/upskill?ref=${formData.email.split('@')[0]}`;
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000); // Reset copied state after 3 seconds
  };

  const handleAddToWhatsApp = () => {
    const whatsappLink = `https://wa.me/919544716586?text=Hi%2C%20my%20name%20is%20${formData.fullname}%2C%20Add%20me%20to%20the%20Exclusive%20WhatsApp%20Group%2C`;
    window.location.href = whatsappLink;
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setPaymentComplete(true)
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
      <div className="max-w-xl w-full mx-4 md:mx-auto mt-0 md:rounded-lg p-4 md:p-8 shadow-input bg-white dark:bg-black">

        {/* Heading */}

        {paymentComplete ? (
          <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
            {`Hurray! You’re Enrolled.`}
          </h1>
          ) : (
            <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
              Register for Exclusive Python Live Class
            </h1>
        )}


        {loading ? (
          <div>
            <p className="text-center text-gray-700 dark:text-gray-300 text-sm mb-6">
              {`Hi ${formData.fullname}, You are registered for Exclusive Python Live Class!`}
            </p>

            {paymentComplete ? (
                <div className="flex items-center justify-center">
                    <Card className="w-full max-w-sm mx-auto p-4 bg-white dark:bg-black text-gray-800 dark:text-gray-200 rounded-lg shadow-lg">
                      <CardHeader className="text-center space-y-4"> {/* Increased space-y to 4 for more spacing */}
                        <CardTitle className="text-lg font-bold">Payment Completed</CardTitle>
                        <CardDescription>
                          Congratulations! You are now eligible to join our exclusive Python group and earn money and exciting rewards through referrals.
                        </CardDescription>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          Share your unique referral code with friends to earn cash and rewards together.
                        </p>
                      </CardHeader>
                      
                      <CardContent className="flex flex-col items-center space-y-4">
                      <div className="flex flex-col items-center space-y-4">
                          {/* Referral Code Display */}
                          <div className="w-full">
                            <Label className="sr-only" htmlFor="referral-code">
                              Referral Code
                            </Label>
                            <Input
                              id="referral-code"
                              readOnly
                              value={formData.email.split('@')[0]} // Replace with your actual referral code from state or props
                              className="w-full text-center bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2"
                            />
                          </div>

                          {/* Copy Referral Link Button */}
                          <div className="w-full">
                            <Button
                              size="sm"
                              className="relative group/btn bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] hover:scale-105 transition-transform duration-300"
                              onClick={copyReferralLink}
                            >
                              {copied ? 'Link Copied!' : 'Copy Referral Link'}
                            </Button>
                          </div>
                          <p className="text-sm mt-3 text-center">
                            <strong className="text-red-600">Important:</strong> Do not forget to copy the link or remember the code as it is crucial to earn money.
                          </p>

                        </div>

                      </CardContent>
                      
                      <CardFooter className="mt-auto">
                        <Button
                          onClick={handleAddToWhatsApp}
                          className="relative group/btn bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] hover:scale-105 transition-transform duration-300"
                        >
                          Add to WhatsApp Group
                        </Button>
                      </CardFooter>
                    </Card>
                </div>

            ): (
                <Card>
                </Card>

            )}
          </div>
        ) : ( // If loading state is false, display the form
          <>
            <p className="text-center text-gray-700 dark:text-gray-300 text-sm mb-6">
              Join our community and unlock exclusive benefits today! Act now to secure your spot
            </p>
            <form className="my-8" onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="fullname">Full name</Label>
                  <Input id="fullname" placeholder="Your Name" type="text" value={formData.fullname} onChange={handleChange} required />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="Your Email Address" type="email" value={formData.email} onChange={handleChange} required />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" placeholder="Your Phone Number (Without Country Code)" type="tel" value={formData.phoneNumber} onChange={handleChange} required />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="collegeName">College Name</Label>
                <Input id="collegeName" placeholder="Your College Name" type="text" value={formData.collegeName} onChange={handleChange} required />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="uniquecode">Unique Code</Label>
                <Input id="uniquecode" placeholder="Provided Code" type="text" value={formData.uniquecode} onChange={handleChange} required />
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
                disabled={loading} // Disable the button when loading state is true to prevent multiple submissions
              >
                Register Now &rarr;
                <BottomGradient />
              </button>
              <p className="flex items-center justify-center mt-6 text-sm leading-6 text-gray-500">
                PS. There are only limited seats available.
              </p>
            </form>
          </>
        )}


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
