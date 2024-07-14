'use client'

import { useState } from 'react';
import InstagramIcon from '../component/InstagramIcon'
import WhatsAppIcon from '../component/WhatsAppIcon'
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from '@chakra-ui/react';

export default function GetReferralCodeAgain() {
  const toast = useToast();
  const [formData, setFormData] = useState({ email: '' });
  const [referralLink, setReferralLink] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleGenerateReferralLink = () => {
    const referralID = formData.email.split('@')[0];
    const newReferralLink = `https://codenuggets.studio/upskill?ref=${referralID}`;
    setReferralLink(newReferralLink);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopySuccess(true);

    toast({
      title: "Referral link copied!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }
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
  

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex min-h-[100vh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <Link href="#" className="flex justify-center" prefetch={false}>
            <CodeIcon className="h-12 w-auto" />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Get your unique referral link
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Sign up with your email to receive your personalized referral link.
          </p>
        </div>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
              className="block w-full rounded-md border-0 py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Button
              type="button"
              onClick={() => { handleGenerateReferralLink(); setCopySuccess(false); }}
              className="flex w-full justify-center rounded-md bg-neutral-800 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800"
            >
              Get Referral Link
            </Button>
          </div>
        </form>
        {referralLink && (
          <div className="text-center text-sm text-muted-foreground">
            <div className="font-medium">Your referral link:</div>
            <div className="mt-2 flex flex-col gap-2">
              <Input
                type="text"
                value={referralLink}
                readOnly
                className="flex text-center block w-full rounded-md border-0 bg-muted py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="flex w-full items-center justify-center rounded-md mb-6"
              >
                <CopyIcon className="h-4 w-4 mr-2" />
                <span>Copy referral link</span>
              </Button>
            </div>
            {formData.email && (
              <div className="w-full mb-4">
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
            )}
            {formData.email && (
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
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function CopyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}
