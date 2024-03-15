import React from 'react';
import { cn } from "@/utils/cn";

export const DarkBentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto dark:bg-gray-900",
        className
      )}
    >
      {children}
    </div>
  );
};

export const DarkBentoGridItem = ({
  className,
  title,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
}) => {
  // Split the description into an array of lines
  const descriptionLines = typeof description === 'string' ? description.split('\n') : [];

  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-gray-800 dark:bg-gray-700 border border-transparent dark:border-white/[0.2] justify-between flex flex-col space-y-4",
        className
      )}
      style={{ padding: '20px', maxWidth: '90%', margin: '20px auto' }} // Added padding, max-width, and margin
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-white dark:text-gray-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-gray-400 text-xs dark:text-gray-300">
          {/* Map over the description lines and render each line */}
          {descriptionLines.map((line, index) => (
            <p key={index} className="mb-1">{line.trim()}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

