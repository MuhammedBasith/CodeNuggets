import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
  } from "@radix-ui/react-icons";
  import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
  
  const features = [
    {
      Icon: FileTextIcon,
      name: "Comprehensive Learning Resources",
      description: "Access to a vast library of tutorials, articles, and interactive lessons.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-2 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: InputIcon,
      name: "Hands-On Projects and Challenges",
      description: "Apply your skills through real-world projects and coding challenges.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "Expert Guidance and Support",
      description: "Interact with experienced instructors and mentors.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    // {
    //   Icon: CalendarIcon,
    //   name: "Calendar",
    //   description: "Use the calendar to filter your files by date.",
    //   href: "/",
    //   cta: "Learn more",
    //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
    //   className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    // },
    // {
    //   Icon: BellIcon,
    //   name: "Notifications",
    //   description:
    //     "Get notified when someone shares a file or mentions you in a comment.",
    //   href: "/",
    //   cta: "Learn more",
    //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
    //   className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    // },
  ];
  
  export default function BentoDemo() {
    return (
      <BentoGrid className="lg:grid-rows-4">
        {features.map((feature, index) => (
          <BentoCard
            key={index} // Use index as key since name might not be unique
            {...feature}
            className={feature.className} // Pass className from feature object
          />
        ))}
      </BentoGrid>
    );
  }
  