import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const doLogout = async () => {
      try {
        // 1) Firebase auth sign out
        await signOut(auth);
      } catch (e) {
        console.error("Firebase signOut error:", e);
      }

      // 2) Clear all auth + voting related localStorage
      localStorage.removeItem("userPhone");
      localStorage.removeItem("authUser");
      localStorage.removeItem("totalVotesUsed");
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("voted_") || key.startsWith("votedCandidate_")) {
          localStorage.removeItem(key);
        }
      });

      // If you still use these older keys anywhere, clear them too:
      localStorage.removeItem("authenticated");
      localStorage.removeItem("uid");
      localStorage.removeItem("user");
      localStorage.removeItem("redirectAfterLogin");

      // 3) Redirect to login
      navigate("/login", { replace: true });
    };

    doLogout();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">
      <div className="text-center">
        <p className="text-xl sm:text-2xl font-semibold mb-2">Logging you out...</p>
        <p className="text-sm sm:text-base text-gray-400">
          Please wait a moment while we clear your session.
        </p>
      </div>
    </div>
  );
}
