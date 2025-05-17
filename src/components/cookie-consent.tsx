"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#181F35] dark:bg-[#0D1425] border-t border-[#22D1F8]/20 p-4 z-50 animate-slideUp">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 md:mr-4">
          <p className="text-sm text-[#abc4ff] dark:text-[#d1e0ff]">
            We use cookies to enhance your browsing experience. By continuing to
            use our site, you agree to our use of cookies.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-gradient-to-r from-[#22D1F8] to-[#FF4EA3] rounded-md text-white text-sm font-medium"
          >
            Accept
          </button>
          <button
            onClick={declineCookies}
            className="px-4 py-2 bg-transparent border border-[#22D1F8]/40 rounded-md text-[#22D1F8] text-sm font-medium"
          >
            Decline
          </button>
          <button
            onClick={declineCookies}
            className="text-[#abc4ff]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
