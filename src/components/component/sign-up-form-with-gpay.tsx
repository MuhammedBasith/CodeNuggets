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
    referralCode: null || search,
  });

  const [loading, setLoading] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(120); // Initial time in seconds (2 minutes)
  const [isPaymentEnabled, setIsPaymentEnabled] = useState(false);
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
  const handlePaymentDoneSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setPaymentComplete(true); // Set loading state to true when the form is submitted
    // Here you can perform additional validation or submit the form data
    // For demonstration purposes, let's simulate an API call delay
  };

  const handleDownloadQR = () => {
    toast({
      title: 'Payment Reminder',
      description: 'Please remember to click “Payment Done” after completing the payment to finalize your registration.',
      status: 'info', // Use 'info' status for an informative message
      duration: 7000, // Duration in milliseconds, adjust as needed
      isClosable: true, // Allow the toast to be closable by the user
    });
    // Replace this with the logic to download the QR code image
    const downloadLink = document.createElement('a');
    downloadLink.href = './codenuggets-gpay-qr.png'; // Replace with the actual URL of the QR code image
    downloadLink.download = 'CodeNuggets-Gpay-QR.png'; // Specify the desired file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    console.log("Downloading QR code...");
  };


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime > 0) {
          const newTime = prevTime - 1;
          if (newTime === 80) {
            setIsPaymentEnabled(true); // Enable payment button when timer reaches 1:30
          }
          return newTime; // Decrease time by 1 second
        } else {
          clearInterval(timer); // Stop the timer when time reaches 0
          return 0;
        }
      });
    }, 1000); // Update time every second

    return () => clearInterval(timer); // Clean up interval on component unmount
  }, []); // Empty dependency array to run effect only once on component mount

  // Convert remaining seconds to display format (mm:ss)
  const formatTime = (seconds: any) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when the form is submitted
    // Here you can perform additional validation or submit the form data
    // For demonstration purposes, let's simulate an API call delay
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
            {paymentComplete ? (
            <p className="text-center text-gray-700 dark:text-gray-300 text-sm mb-6">
              {`Hi ${formData.fullname}, You are registered for Exclusive Python Live Class!`}
            </p>
            ): (
            <p className="text-center text-gray-700 dark:text-gray-300 text-sm mb-6">
              Go ahead and open your UPI app and make the payment.
            </p>
            )}

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
                              className="w-full bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-700 rounded-md px-3 py-2"
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
                          className="w-full bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-700 rounded-md px-4 py-2"
                        >
                          Add to WhatsApp Group
                        </Button>
                      </CardFooter>
                    </Card>
                </div>

            ): (
                <Card>
                  <CardHeader>
                    <div className="text-center space-y-2">
                      <CardTitle className="text-xl">Initiating Payment</CardTitle>
                      <CardDescription>Scan the QR code to make a payment of ₹29</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center space-y-4">
                    <p className="text-center text-sm">
                      Click the “Download” button below to save the QR code. Open your UPI app, scan the QR code, and proceed to make the payment of ₹29.
                    </p>
                    <div className="w-full max-w-sm">
                      {/* Display the QR code image */}
                      <img
                        alt="QR code"
                        className="mx-auto rounded-lg overflow-hidden"
                        height="200"
                        src='./codenuggets-gpay-qr.png'
                        style={{
                          aspectRatio: "200/200",
                          objectFit: "cover",
                        }}
                        width="200"
                      />
                    </div>
                    {/* Button to download the QR code */}
                    <Button className="mx-auto bg-gray-800 text-white hover:bg-gray-700" size="sm" onClick={handleDownloadQR}>
                      Download QR Code
                    </Button>
                    <div className="flex items-center space-x-2">
                      {/* Display the remaining time for payment */}
                      <span className="text-sm text-red-600 font-medium">Time remaining:</span>
                      <span className="text-sm text-red-600 font-medium">{formatTime(timeRemaining)}</span>
                    </div>
                    {/* Message reminding the user not to close or refresh the page */}
                    <p className="text-center text-sm text-gray-500 mt-3">
                      <strong>Do not close or refresh this window until payment is completed.</strong> Once payment is done, return here and click the “Payment Done” button.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t justify-center">
                    {/* Payment Done button with dynamic disabled state */}
                    <Button
                      className={`bg-gray-800 text-white hover:bg-gray-700 mt-5 ${isPaymentEnabled ? '' : 'opacity-50 cursor-not-allowed'}`}
                      onClick={handlePaymentDoneSubmit}
                      disabled={!isPaymentEnabled}
                    >
                      Payment Done  
                    </Button>
                  </CardFooter>
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
                disabled={loading} // Disable the button when loading state is true to prevent multiple submissions
              >
                Pay ₹29 &rarr;
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
