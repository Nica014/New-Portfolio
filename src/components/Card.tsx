"use client";
import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  icon?: ReactNode;
  iconBg?: string;
  children: ReactNode;
  className?: string;
}

const Card = ({ title, icon, iconBg, children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-card-bg rounded-2xl p-6 border-4 border-b-10 border-border hover:shadow-lg transition-all duration-300 ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        {icon && (
          <div className={`p-2 rounded-lg ${iconBg || "bg-gray-100"}`}>
            {icon}
          </div>
        )}
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default Card;