import React from 'react';

export default function Logo({ className = "h-8 sm:h-9" }) {
  return (
    <div className="flex items-center gap-2 select-none group">
      {/* Official Signove Logo - Light Mode */}
      <img
        src="/logo-signove.png"
        alt="Signove Tecnologia"
        className={`block dark:hidden ${className} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
      />
      {/* Official Signove Logo - Dark Mode (with crisp white text) */}
      <img
        src="/logo-signove-dark.png"
        alt="Signove Tecnologia"
        className={`hidden dark:block ${className} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
      />
    </div>
  );
}
