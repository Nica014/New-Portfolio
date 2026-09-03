"use client";
import React, { useState } from "react";
import { MapPin, FileText, Mail, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProfileCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
      {/* Profile Image */}
      <div
        className="relative w-44 h-44 rounded-xl overflow-hidden shrink-0 bg-gray-200 cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? "/alimurungnica-hover.png" : "/alimurungnica.png"}
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>

      {/* Profile Info */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-4xl md:text-2xl font-bold">Nica Alimurung</h1>
        </div>
        
        <div className="flex items-center gap-2 text-secondary mb-4">
          <MapPin size={18} />
          <span>Tarlac, Philippines</span>
        </div>

        <p className="text-lg text-secondary mb-6">
          Front End Developer
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href="/Alimurung-Resume.pdf"
            className="px-6 py-2 border-3 border-b-5 border-black bg-primary-btn text-btn-text rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <FileText size={18} />
            Resume
          </a>
          <Link
            href="mailto:alimurungnica14@gmail.com"
            className="px-6 py-2 border-3 border-b-5 border-black rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <Mail size={18} />
            Send Email
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;