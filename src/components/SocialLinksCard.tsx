"use client";
import React from "react";
import Link from "next/link";
import {
  Link2,
  Linkedin,
  Github,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
} from "lucide-react";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const SocialLinksCard = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/nica-alimurung-49823b2b2/",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/Nica014",
    },
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      url: "https://www.facebook.com/nica.alimurung.3",
    }
  ];

  return (
    <div className="bg-card-bg rounded-2xl p-6 border-4 border-b-10 border-border">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-pink-100">
          <Link2 className="text-pink-600" size={24} />
        </div>
        <h2 className="text-xl font-bold">Social Links</h2>
      </div>

      {/* Social Links List */}
      <div className="space-y-3">
        {socialLinks.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-3 p-3 rounded-xl border border-border hover:border-gray-300 hover:shadow-md transition-all duration-200 group overflow-hidden"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-white/40 to-transparent" />
            <div className="relative">
              {social.icon}
            </div>
            <span className="relative font-medium group-hover:text-blue-600 transition-colors">
              {social.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialLinksCard;
