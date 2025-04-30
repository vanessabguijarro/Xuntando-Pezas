// Main has children that will define each page
import React from "react";

export default function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-content">
       {children}
    </div>      
  );
}