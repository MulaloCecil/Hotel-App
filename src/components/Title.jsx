import React from "react";

export default function Title({ title }) {
  return (
    <div className="section-title flex items-center mb-8">
      <h4 className="text-xl font-bold text-white mr-4">{title}</h4>
      <div className="flex-grow h-0.5 bg-teal-500"></div>
    </div>
  );
}
