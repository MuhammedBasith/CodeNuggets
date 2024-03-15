'use client'

import React from "react";
import { DarkBentoGrid as BentoGrid, DarkBentoGridItem as BentoGridItem } from "../ui/bento-grid";
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation';


export default function SyllabusComponent() {
    const router = useRouter();

    const handleEnrollClick = () => {
      router.push('/upskill');
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto md:auto-rows-[20rem] mb-8">
          <BentoGrid>
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                className={item.className}
              />
            ))}
          </BentoGrid>
          <Button onClick={handleEnrollClick} className="w-full mt-7 mb-4 border border-gray-700 rounded-md px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 hover:text-gray-200 transition-colors duration-300">
          Upskill Now
        </Button>
        </div>

      </div>
    );
  }

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Master the Basics of Python",
    description: `- Learn the fundamentals of Python programming language in a comprehensive three-hour live session.
    - Dive into Python syntax, data types, variables, loops, and functions.
    - Gain hands-on experience with practical exercises and real-world examples.
    - Lay a solid foundation for your coding journey with our engaging and interactive learning approach.
    - Showcase your newfound abilities with impressive projects to impress your peers and potential employers.`,
    className: "md:col-span-2",
  },
  {
    title: "Exclusive Python Projects",
    description: `- Two exclusive projects: Amazon Price Tracker and Automatic Birthday Wishing Program.
    - Develop practical skills while building real-world applications.
    - Get step-by-step guidance from expert instructors throughout the project development process.`,
    className: "md:col-span-1",
  },
  {
    title: "Exclusive WhatsApp Group",
    description: `- Gain access to our premium WhatsApp group for enrolled students.
    - Receive exclusive resources, project ideas, and software codes curated by industry professionals.
    - Get 24/7 support from our dedicated team of mentors.
    - Stay connected with like-minded individuals and expand your network in the world of Python programming.`,
    className: "md:col-span-1",
  },
  {
    title: "Limited Time Premium Offer",
    description:
      `- Enroll now to take advantage of our limited time premium offer.
      - Receive an exclusive online-hosted certificate upon successful completion.
      - Get instant access to our comprehensive Python course and exclusive WhatsApp group.
      - Elevate your coding skills and accelerate your career growth with our premium learning experience.
      - Don't miss out on this opportunity to become a Python programming expert and join our community of aspiring developers.`,
    className: "md:col-span-2",
  },
];
