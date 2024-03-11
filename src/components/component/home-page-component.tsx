import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SignupFormDemo  from '../component/sign-up-form'
import { Button } from '@/components/ui/button';

export default function HomePageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-col md:flex-row items-center justify-center w-full py-4 md:py-6">
        <div className="container text-center">
          <div className="flex items-center justify-center md:justify-between gap-4 px-4 md:gap-6 md:px-6">
            <div className="flex items-center gap-2">
              <LightbulbIcon className="w-8 h-8" />
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tighter sm:text-2xl md:text-3xl my-4 md:my-0">CodeNuggets</h1>
            </div>
            <nav className="flex mt-4 md:mt-0 items-center space-x-4">
              <Button className='bg-gray-800 text-white hover:bg-gray-700 transition duration-300 ease-in-out'>
                Syllabus
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 flex justify-center items-center">
        <div className="w-full py-8">
          <div className="container flex flex-col gap-8 px-4 md:gap-10 md:px-6 justify-center items-center mx-auto">
            <div className="mx-auto prose max-w-3xl lg:max-w-5xl dark:prose-dark">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-4xl md:text-6xl my-8">Welcome to CodeNuggets</h1>
              <p className="text-xl text-gray-500 dark:text-gray-400 text-center">
                Elevate your Software Career to new Heights
              </p>
            </div>
            <div className="mx-auto max-w-lg space-y-6 mt-8">
              <SignupFormDemo />
            </div>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full py-4 md:py-6">
        <div className="container flex items-center gap-4 px-4 text-center md:gap-6 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Made with love by the community. All rights reserved.
          </p>
          <nav className="flex ml-auto items-center space-x-4">
            <Link className="underline underline-offset-2" href="#">
              Terms
            </Link>
            <Link className="underline underline-offset-2" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}




function LightbulbIcon(props) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}
