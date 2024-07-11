'use client'


import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'


export default function SyllabusV0() {

  const router = useRouter()

  function handleClick(){
    router.push('/upskill')
  }


  return (
    <div className="bg-white text-black p-6 md:p-10 rounded-lg shadow-lg max-w-3xl mx-auto">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Introduction to Python</h1>
          <p className="text-gray-700 mt-2">
          Unlock the power of Python with our engaging and comprehensive course, designed to take you from beginner to coding pro in just hours.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Course Outline</h2>
          <ul className="mt-2 space-y-2">
            <li className="flex items-start">
              <CheckIcon className="w-5 h-5 text-black-500 mr-2 mt-1" />
              <span>Master the basics of Python in a comprehensive live session.</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-5 h-5 text-black-500 mr-2 mt-1" />
              <span>Dive into Python syntax, data types, variables, loops, and functions.</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-5 h-5 text-black-500 mr-2 mt-1" />
              <span>Gain hands-on experience with practical exercises and real-world examples.</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-5 h-5 text-black-500 mr-2 mt-1" />
              <span>Enroll now for a limited-time premium offer and receive an online-hosted certificate.</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-5 h-5 text-black-500 mr-2 mt-1" />
              <span>Work on exclusive real world projects like Automatic Birthday Wishing Program.</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-5 h-5 text-black-500 mr-2 mt-1" />
              <span>Access our premium WhatsApp group for resources, project ideas, and 24/7 support.
              </span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-5 h-5 text-black-500 mr-2 mt-1" />
              <span>Instantly access our Python course, elevate your coding skills, and join a community of the 1% developers.</span>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Button
          onClick={handleClick}
            className="relative group/btn bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] hover:scale-105 transition-transform duration-300"
          >
            Enroll Now &rarr;
          </Button>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
