    "use client";
import React from "react";
import Link from "next/link";
import { FolderGit2, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Project {
  thumbnail: string;
  title: string;
  description: string;
  url: string;
}

const ProjectsCard = () => {
  const projects: Project[] = [
    {
      thumbnail: "/further-thumbnail.webp",
      title: "Further",
      description: "Online store for premium snack products",
      url: "https://dev-further.pantheonsite.io/",
    },
    {
      thumbnail: "/aek-thumbnail.webp",
      title: "AEK Media",
      description: "Online store for premium snack products",
      url: "https://aekmedia.com.au/",
    },
    {
      thumbnail: "/mrfreeze-thumbnail.webp",
      title: "Mr. Freeze",
      description: "Online store for premium snack products",
      url: "https://mr-freezepops.co.uk/",
    },
    {
      thumbnail: "/purepearls-thumbnail.webp",
      title: "Pure Pearls",
      description: "Online store for premium snack products",
      url: "https://www.purepearls.com/",
    },
    {
      thumbnail: "/pearlofjoy-thumbnail.webp",
      title: "Pearls of Joy",
      description: "Online store for premium snack products",
      url: "https://www.pearlsofjoy.com/",
    },
    {
      thumbnail: "/knowlton-thumbnail.webp",
      title: "Knowlton Marketing",
      description: "Online store for premium snack products",
      url: "https://knowltonmarketing.co.uk/",
    },
    {
      thumbnail: "/concord-thumbnail.webp",
      title: "Concord",
      description: "Online store for premium snack products",
      url: "https://concordfinance.com/",
    },
    {
      thumbnail: "/bugden-thumbnail.webp",
      title: "Bugden Allen",
      description: "Online store for premium snack products",
      url: "https://bagl.com.au/",
    },
    {
      thumbnail: "/sindikato-thumbnail.webp",
      title: "Sindikato",
      description: "Multimedia site for artists and studios",
      url: "https://sindikato.netlify.app/",
    },
    {
      thumbnail: "/radical-thumbnail.webp",
      title: "Radical",
      description: "Multimedia site for artists and studios",
      url: "http://radicalmusic.netlify.app/",
    },
    {
      thumbnail: "/clohaine-thumbnail.webp",
      title: "Clohane",
      description: "Site for beautiful Interiors",
      url: "https://clohane.ie",
    },
    {
      thumbnail: "/privateauto-thumbnail.webp",
      title: "Private Auto",
      description: "Online store for premium snack products",
      url: "https://new.privateauto.com/",
    },
    {
      thumbnail: "/lids-thumbnail.webp",
      title: "Lids",
      description: "Online store for premium snack products",
      url: "https://lidsau.com/",
    },
  ];
  
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-5 bg-card-bg rounded-2xl border-4 border-b-10 border-border hover:shadow-md transition-all duration-200 cursor-pointer group overflow-hidden text-center"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-white/40 to-transparent" />
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={720}
              height={357}
              className="rounded-lg mb-4 w-full"
            />
            <h3 className="relative font-semibol mb-2">
              {project.title}
            </h3>
            <p className="relative text-sm text-[#8a8a8a] mb-3">
              {project.description}
            </p>
            <div className="px-6 py-2 border-3 border-b-5 border-black bg-primary-btn text-btn-text rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center gap-2 w-fit mx-auto">
              Live Preview
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;