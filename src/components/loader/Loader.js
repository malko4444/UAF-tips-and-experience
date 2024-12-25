import React from 'react';
import './loader.css';
import { FaRegStickyNote } from 'react-icons/fa'; // Optional icon library (e.g., react-icons)

export default function Loader() {
  return (
    <div className="loader-container">
      <FaRegStickyNote className="loader-icon" />
      <div className="loader-text">
        <span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span>
      </div>
      <div className="loader-dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
}
