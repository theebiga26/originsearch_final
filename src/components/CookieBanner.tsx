import { useState, useEffect } from "react";
import { Database } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only check localStorage on client side
    const consent = localStorage.getItem("originsearch_cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("originsearch_cookie_consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("originsearch_cookie_consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:max-w-[400px] z-[9999] bg-[#1A2E22] text-[#F5F3EF] p-5 sm:p-6 rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-[#C6F135]/20 flex flex-col gap-4">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Database className="w-4 h-4 text-[#C6F135]" />
          <h4 className="font-display font-bold text-base text-[#F5F3EF]">Cookie Consent</h4>
        </div>
        <p className="text-xs sm:text-sm text-[#F5F3EF]/70 leading-relaxed">
          We use cookies to optimize site functionality and enhance your experience. By clicking "Accept", you agree to our{" "}
          <Link to="/cookies" className="text-[#C6F135] hover:underline">
            Cookie Policy
          </Link>
          .
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={handleAccept}
          className="flex-1 bg-[#C6F135] hover:bg-[#b5e022] text-[#1A2E22] font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl transition-colors"
        >
          Accept All
        </button>
        <button
          onClick={handleDecline}
          className="flex-1 bg-white/10 hover:bg-white/20 text-[#F5F3EF] font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
