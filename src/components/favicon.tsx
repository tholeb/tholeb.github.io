"use client";

import { useEffect } from 'react';

const Favicon: React.FC = () => {
  useEffect(() => {
    const updateFavicon = () => {
		const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const newFavicon = generateFavicon(isDarkMode ? 'white' : 'black');
		setFavicon(newFavicon);
    };

    const setFavicon = (faviconUrl: string) => {
      // Remove the existing favicon element
      const existingFavicon = document.getElementById('dynamic-favicon');
      if (existingFavicon) {
        document.head.removeChild(existingFavicon);
      }

      // Create a new favicon element
      const link = document.createElement('link');
      link.id = 'dynamic-favicon';
      link.rel = 'icon';
      link.href = faviconUrl;
      document.head.appendChild(link);
    };

    const generateFavicon = (textColor: string) => {
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <style>
            @font-face {
              font-family: 'Roboto';
              font-style: normal;
              font-weight: 400;
              src: url('https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf') format('truetype');
            }
            text {
              font-family: 'Roboto', sans-serif;
            }
          </style>
          <text x="50%" y="50%" font-size="24" text-anchor="middle" fill="${textColor}" alignment-baseline="middle">
            TL
          </text>
        </svg>
      `;
      return `data:image/svg+xml;base64,${btoa(svg)}`;
    };

    // Initial favicon setup
    updateFavicon();

    // Listen for theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateFavicon);
    };
  }, []);

  return null; // No need to return any JSX as we're dynamically injecting the favicon
};

export default Favicon;
