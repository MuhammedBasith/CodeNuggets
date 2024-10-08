'use client';

import React, { useState, useEffect } from 'react';
import { ConfettiButton } from "@/components/magicui/confetti";
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { cn } from '@/utils/cn';
import InstagramIcon from '../component/InstagramIcon'
import WhatsAppIcon from '../component/WhatsAppIcon'
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import Countdown from '../component/CountdownComponent'
import Confetti from '@/components/component/Confetti'
import { CoolMode } from "@/components/magicui/cool-mode";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ConfettiSideCannons from '../../components/component/SideConfetti'


export default function SignupFormDemo() {
  return (
    <Suspense fallback={<Spinner size="xl" />}>
      <SignupFormContent />
    </Suspense>
  );
}

function SignupFormContent() {
  const searchParams = useSearchParams();
  const eventDate = process.env.NEXT_PUBLIC_EVENT_DATE;
  const toast = useToast();
  const search = searchParams.get('ref');
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    collegeName: '',
    referralCode: null || search,
  });

  const [loading, setLoading] = useState(false);
  const [continueButtonloading, setContinueButtonloading] = useState(false);
  const [confirmationPage, setConfirmationPage] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [copied, setCopied] = useState(false);
  const [confettiActive, setconfettiActive] = useState(false);

  const copyReferralLink = () => {
    const referralLink = `${window.location.origin}/upskill?ref=${formData.email.split('@')[0]}`;
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };



  const shareOnWhatsApp = () => {
    const referralID = formData.email.split('@')[0];
    const whatsappUrl = `https://api.whatsapp.com/send?text=Hey, there!%0D%0A%0D%0ADon't miss out on this exclusive 3-hour live hands-on Python class with CodeNuggets! 🚀 Learn Python from scratch and take your software career to the next level.%0D%0A%0D%0AClick the link to sign up directly: https://codenuggets.studio/upskill?ref=${referralID}%0D%0A%0D%0AHere's the best part: For every friend you refer, you can earn up to ₹1000! 💰%0D%0A%0D%0AStart earning while you learn! Hurry, spots are limited!!`;
    window.open(whatsappUrl, '_blank');
  };
  
  const shareOnInstagram = () => {
    const referralID = formData.email.split('@')[0];
    const instagramUrl = `https://www.instagram.com/?text=Hey! Don’t miss out on this exclusive 3-hour live hands-on Python class with CodeNuggets! Learn Python from scratch and take your software career to the next level. Click the link to sign up directly: https://codenuggets.studio/upskill?ref=${referralID}. Here’s the best part: For every friend you refer, you can earn up to ₹1000! 💰 Start earning while you learn! Hurry, spots are limited!`;
    window.open(instagramUrl, '_blank');
  };

  const handleAddToWhatsApp = () => {
    const whatsappLink = `https://wa.me/919562304928?text=Hey%20Team%20CodeNuggets,%0D%0AI%20have%20just%20registered%20for%20the%20Python%20class%20but%20my%20payment%20is%20pending.%0D%0AMy%20email%20ID%20is%20${encodeURIComponent(formData.email)}.%0D%0APlease%20let%20me%20know%20the%20steps%20to%20complete%20the%20payment.%0D%0AThanks!`;
    window.location.href = whatsappLink;
  };


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (formData.referralCode?.startsWith('http')){
      toast({
        title: 'Invalid Referral Code',
        description: "The referral code you entered appears to be a URL, which is not allowed. Please enter a valid referral code or leave the field blank if you don't have one.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      setLoading(false)
    }else if(formData.referralCode?.trim() === formData.email.split('@')[0]){
      toast({
        title: 'Invalid Referral Code',
        description: "The referral code you entered appears to be yours, which is not allowed. Please enter a valid referral code or leave the field blank if you don't have one.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      setLoading(false)
    }else{

      setLoading(true)
      setContinueButtonloading(false)
      const emailID = formData.email
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/pre-submit-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, phoneNumber: formData.phoneNumber, referralCode: formData.referralCode })
      });

      const data = await response.json()
      
      if (response.status === 201){
        if (formData.referralCode){
          if(data.referralExists){
            setLoading(true);
            setConfirmationPage(true);
            setLoading(false)
          }else{
            toast({
              title: 'Invalid Referral Code.',
              description: "The referral code you entered does not exist. Please enter a valid referral code or leave the field blank if you don't have one.",
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
            setLoading(false)
          }
        }else{
          setLoading(true);
          setConfirmationPage(true);
          setLoading(false)
        }
  
      }else if (response.status === 409){

        let issue = ''

        if (data.phoneExists){
          issue = 'Phone Number'
        }else if (data.emailExists){
          issue = 'Email' 
        } 

        toast({
          title: `${issue} Already Exists.`,
          description: `The email you entered is already registered. Please try using a different ${issue.toLowerCase()} or contact support for assistance.`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        setLoading(false)
      }else if (response.status === 500){
        toast({
          title: 'Internal Server Error.',
          description: "Something went wrong on our end. Please try again later or contact support for assistance.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        setLoading(false)
      }

    }


  };

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    
  };

  const handleContinue = async () => {
    setContinueButtonloading(true)

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/submit-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'fullName': formData.fullname,
        'email': formData.email,
        'phoneNumber': formData.phoneNumber,
        'collegeName': formData.collegeName,
        'referralCode': formData.referralCode
      })
    })

    if (response.status === 200){
      setContinueButtonloading(false)
      setPaymentComplete(true);
      setConfirmationPage(false);
      setconfettiActive(true)
      toast({
        title: 'Registration Successful',
        description: "You have successfully registered for the event!",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    }else{

      toast({
        title: 'Registration Failed',
        description: "Please try again later or contact support for assistance.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      setLoading(false);
      setConfirmationPage(false);
      setContinueButtonloading(false)

    }

  };

  const handleCancel = () => {
    setLoading(false);
    setConfirmationPage(false);
    setContinueButtonloading(false)
  };

  useEffect( () => {
    const response = fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/awake-call`, {method: "GET"}).then((data) => {
      console.log('Done awake call!')
    })
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-xl w-full mx-4 md:mx-auto mt-0 md:rounded-lg p-4 md:p-8 shadow-input bg-white dark:bg-black">
        {paymentComplete ? (
          <>
            <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
              Hurray! You’re Enrolled.
            </h1>
            <p className="text-center text-gray-700 dark:text-gray-300 text-sm mb-6">
              Hi {formData.fullname}, You are registered for the Exclusive Python Live Class!
            </p>
            <div className="flex items-center justify-center">

              {confettiActive && (
                <div>
                  <Confetti></Confetti>
                  <ConfettiSideCannons />
                </div>
                )}

              <Card className="w-full max-w-sm mx-auto p-4 bg-white dark:bg-black text-gray-800 dark:text-gray-200 rounded-lg shadow-lg">
                <CardHeader className="text-center space-y-4">
                  <CardTitle className="text-lg font-bold">Thank you for registering!</CardTitle>
                  <CardDescription>
                    Congratulations! You are now eligible to join our exclusive Python group and earn money and exciting rewards through referrals.
                  </CardDescription>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Share your unique referral code with friends to earn cash and rewards together.
                  </p>
                  <p className="text-lg font-bold mt-4">Live Class Event Countdown:</p>
                  <Countdown eventDate={eventDate} />
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <div className="w-full">
                    <Label className="sr-only" htmlFor="referral-code">
                      Referral Code
                    </Label>
                    <Input
                      id="referral-code"
                      readOnly
                      value={`https://www.codenuggets.studio?ref=${formData.email.split('@')[0]}`}
                      className="w-full text-center bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2"
                      style={{ fontSize: '10px' }}
                    />
                  </div>
                  <div className="w-full">
                    <ConfettiButton>
                      <CoolMode>
                        <Button
                          size="sm"
                          onClick={copyReferralLink}
                        >
                          {copied ? 'Link Copied!' : 'Copy Referral Link'}
                        </Button>
                      </CoolMode>
                    </ConfettiButton>
                  </div>
                  <div className="w-full">
                    <Button
                      size="sm"
                      className="w-full bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-700 rounded-md px-3 py-2 flex items-center justify-center"
                      onClick={shareOnWhatsApp}
                    >
                      <span className="mr-2">
                        <WhatsAppIcon className="w-6 h-6 fill-current" />
                      </span>
                      Share on WhatsApp
                    </Button>
                  </div>
                  <div className="w-full">
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white hover:bg-opacity-90 focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-700 rounded-md px-3 py-2 flex items-center justify-center"
                      onClick={shareOnInstagram}
                    >
                      <span className="mr-2">
                        <InstagramIcon className="w-5 h-5 fill-current" />
                      </span>
                      Share on Instagram
                    </Button>
                  </div>
                  <p className="text-sm mt-3 text-center">
                    <strong className="text-red-600">Important:</strong> Do not forget to copy the link or remember the code as it is crucial to earn money.
                  </p>
                  <div className="mt-4">
                    <p className="text-lg font-bold text-center mt-6">Referral Program Steps:</p>
                    <ol className="list-decimal list-inside space-y-2 text-left mt-3 mb-6">
                      <li>Share your unique referral link with friends.</li>
                      <li>Your friends sign up using your referral link.</li>
                      <li>Once they complete their payment, you start earning rewards.</li>
                      <li>Receive an email notification with the amount earned for each successful referral.</li>
                      <li>Earn up to ₹1000 by referring your friends. 💸</li>
                    </ol>
                  </div>
                  <p className="text-sm mt-3 text-center mt-6">
                    <strong className="text-red-600">Your payment is still pending.</strong> Click the button below to complete your payment via WhatsApp where our team will guide you through the process. After payment, you’ll be added to a special WhatsApp group.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <ConfettiButton>
                    <Button
                      onClick={handleAddToWhatsApp}
                    >
                      Complete Payment
                    </Button>
                  </ConfettiButton>
                </CardFooter>
              </Card>

            </div>
          </>
        ) : confirmationPage ? (
          <>
            <h1 className="text-xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
              Confirm Your Details
            </h1>
            <p className="text-center text-gray-700 dark:text-gray-300 text-xs md:text-sm mb-6">
              Please review the information below. Once you click “Continue” the data cannot be changed.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Full Name', value: formData.fullname },
                { label: 'Email Address', value: formData.email },
                { label: 'Phone Number', value: formData.phoneNumber },
                { label: 'College Name', value: formData.collegeName },
                { label: 'Referral Code (Optional)', value: formData.referralCode || 'N/A' },
              ].map((item, index) => (
                <div key={index} className="flex justify-between mt-4">
                  <Label className="text-xs md:text-base">{item.label}:</Label>
                  <p className="text-right text-black text-xs md:text-base">{item.value}</p>
                </div>
              ))}
              <div className="flex space-x-4">
                <Button className="w-full bg-gray-800 text-white hover:bg-gray-700 mt-5" onClick={handleContinue} disabled={continueButtonloading}>
                  {continueButtonloading ? (
                    <div className='flex items-center justify-center'>
                      <Spinner size="sm" color='white' mr={2} />
                      Loading...
                    </div>
                  ) : (
                    <>Continue</>
                  )}
                </Button>
                <Button className="w-full bg-red-600 text-white hover:bg-red-500 mt-5" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </div>
          </>

        ) : (
          <>
            <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
              Register for Exclusive Python Live Class
            </h1>
            <p className="text-center text-gray-700 dark:text-gray-300 text-sm mb-6">
            Learn, Earn, Repeat. Earn while you learn! Refer 2 friends to our 3-hour Python live class and start earning ₹10 per referral, up to ₹1000! 💸
            </p>
            <form className="my-8" onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="fullname">Full name</Label>
                  <Input id="fullname" placeholder="Your Name" type="text" value={formData.fullname} onChange={handleChange} required />
                </LabelInputContainer>
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" placeholder="Your Email Address" type="email" value={formData.email} onChange={handleChange} required />
                </LabelInputContainer>
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

                <LabelInputContainer>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input id="phoneNumber" placeholder="Your Phone Number (Without Country Code)" type="tel" maxLength={10} pattern="[0-9]{10}" value={formData.phoneNumber} onChange={handleChange} required />
                </LabelInputContainer>
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="collegeName">College Name</Label>
                  <Input id="collegeName" placeholder="Your College Name" type="text" value={formData.collegeName} onChange={handleChange} required />
                </LabelInputContainer>
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="referralCode">Referral Code (Optional)</Label>
                  <Input id="referralCode" placeholder="Referral Code" type="text" value={formData.referralCode || ''} onChange={handleChange} />
                </LabelInputContainer>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the <a href="/terms" className="text-indigo-600 hover:text-indigo-500">terms and conditions</a>
                </label>
              </div>
              <Button
                className="relative group/btn bg-gradient-to-br mt-2 from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] hover:scale-105 transition-transform duration-300"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <Spinner size="sm" color="white" mr={2} />
                    Loading...
                  </div>
                ) : (
                  <>
                    Register Now &rarr;
                    <BottomGradient />
                  </>
                )}
              </Button>
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

function LabelInputContainer({ children }) {
  return <div className="w-full md:flex-1">{children}</div>;
}


const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
