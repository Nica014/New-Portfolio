"use client";
import React from "react";
import Card from "./Card";
import { Code2 } from "lucide-react";

const TechStackCard = () => {
  const techStacks = {
    Frontend: [
      "HTML5",
      "CSS3",
      "SCSS",
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JQuery",
    ],
    Backend: ["PHP"],
    Platforms: [
      "Wordpress (Elementor, ACF, Gutenberg Block)",
      "Shopify",
      "Webflow",
    ],
    Tools: [
      "Git",
      "GitHub",
      "GitHub Desktop",
      "GitHub Copilot",
      "Visual Studio Code",
      "Netlify",
      "Render",
      "Mailchimp",
    ],
    Deployment: [
      "Netlify",
      "Render",
      "LocalWP",
      "FileZilla",
      "SFTP",
    ],
    Automation: [
      "Mailchimp",
      "Zapier",
    ],
  };

  return (
    <Card
      title="Tech Stack"
      icon={<Code2 className="text-purple-600" size={24} />}
      iconBg="bg-purple-100"
    >
      {Object.entries(techStacks).map(([category, techs]) => (
        <div key={category} className="mb-4 last:mb-0">
          <h3 className="font-semibold text-lg mb-2">
            {category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className="relative px-3 py-1 rounded-full bg-tag text-[14px] font-medium text-tag-text overflow-hidden cursor-default transition-colors group"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-white/40 to-transparent" />
                <span className="relative">{tech}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </Card>
  );
};

export default TechStackCard;