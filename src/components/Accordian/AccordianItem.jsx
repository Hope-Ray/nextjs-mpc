'use client'
import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-2 text-gray-700">
          {content}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
