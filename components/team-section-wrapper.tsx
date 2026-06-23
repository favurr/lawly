import React from "react";
import {TeamSection} from "@/components/21stdev/team-section-1";
import {
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Linkedin,
} from "@hugeicons/core-free-icons";

const TeamSectionWrapper = () => {
  const teamMembers = [
    {
      name: "EMMA",
      designation: "Product Designer",
      imageSrc:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example image for Emma
      socialLinks: [
        { icon: (Twitter as unknown) as React.ComponentType<any>, href: "#" },
        { icon: (Linkedin as unknown) as React.ComponentType<any>, href: "#" },
      ],
    },
    {
      name: "HENRY",
      designation: "Lead Developer",
      imageSrc:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example image for Henry
      socialLinks: [
        { icon: (Github as unknown) as React.ComponentType<any>, href: "#" },
        { icon: (Twitter as unknown) as React.ComponentType<any>, href: "#" },
      ],
    },
    {
      name: "JOHN",
      designation: "Marketing Specialist",
      imageSrc:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example image for John
      socialLinks: [
        { icon: (Facebook as unknown) as React.ComponentType<any>, href: "#" },
        { icon: (Instagram as unknown) as React.ComponentType<any>, href: "#" },
      ],
    },
  ];

  const mainSocialLinks = [
    { icon: (Twitter as unknown) as React.ComponentType<any>, href: "#" },
    { icon: (Facebook as unknown) as React.ComponentType<any>, href: "#" },
    { icon: (Instagram as unknown) as React.ComponentType<any>, href: "#" },
    { icon: (Youtube as unknown) as React.ComponentType<any>, href: "#" },
  ];
  return (
    <TeamSection
      title="Experienced Lawyers You Can Trust"
      description="Our attorneys bring diverse legal expertise and a commitment to excellence in every case they handle."
      members={teamMembers}
      registerLink="#"
      logo="LegalFlow"
    />
  );
};

export default TeamSectionWrapper;
