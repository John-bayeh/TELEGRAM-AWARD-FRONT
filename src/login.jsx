import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const TEST_USERS = {
  "+251918123034": "212121",
  "+251911123456": "111111",
  "+251963293185": "123456"
};

function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("+251");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const normalizedPhone = (raw) => raw.replace(/\s+/g, "").replace(/^00/, "+");

  const sendOTP = async () => {
    const cleanPhone = normalizedPhone(phone);

    if (!TEST_USERS[cleanPhone]) {
      toast.error("❌ Use test numbers:\n+251918123034 (212121)\n+251911123456 (111111)\n+251918123030 (333333)");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setOtpSent(true);
      toast.success(`✅ OTP sent! Code: ${TEST_USERS[cleanPhone]}`);
      setLoading(false);
    }, 800);
  };

  const verifyOTP = async () => {
    const cleanPhone = normalizedPhone(phone);
    const expectedOtp = TEST_USERS[cleanPhone];

    if (otp !== expectedOtp) {
      toast.error(`❌ Wrong OTP! Use: ${expectedOtp}`);
      return;
    }

    setLoading(true);

    // Clear voting data
    localStorage.removeItem("totalVotesUsed");
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("voted_") || key.startsWith("votedCandidate_")) {
        localStorage.removeItem(key);
      }
    });

    // Save user
    localStorage.setItem("userPhone", cleanPhone);
    localStorage.setItem("authUser", "true");

    // Backend call (optional)
    try {
      await fetch("/api/logins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: cleanPhone }),
      });
    } catch (e) {
      console.log("Backend optional");
    }

    toast.success("🎉 Login successful!");
    navigate("/home");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-indigo-950 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-xl p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-3">
            Telegram Awards Login
          </h1>
          
          {/* TEST NUMBERS DISPLAY */}
          <div className="bg-black/40 border border-slate-700 rounded-xl p-4 mb-6 text-xs sm:text-sm text-slate-300">
            <div className="font-semibold mb-2">📱 Test Numbers:</div>
            <div>+251918123034 → <span className="text-yellow-400 font-mono">212121</span></div>
            <div>+251911123456 → <span className="text-yellow-400 font-mono">111111</span></div>
            <div>+251918123030 → <span className="text-yellow-400 font-mono">333333</span></div>
          </div>

          {!otpSent ? (
            <>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+251918123034"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mb-4 text-lg"
              />

              <button
                onClick={sendOTP}
                disabled={loading}
                className={`w-full px-4 py-3 rounded-2xl font-semibold text-white shadow-lg transition-all ${
                  loading
                    ? "bg-slate-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 hover:-translate-y-0.5"
                }`}
              >
                {loading ? "Sending OTP..." : "Send Test OTP"}
              </button>
            </>
          ) : (
            <>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Enter OTP
              </label>
              <input
                type="text"
                placeholder="212121"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, "").slice(0, 6))}
                maxLength={6}
                className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 mb-4 tracking-[0.5em] text-center text-xl font-mono"
              />

              <button
                onClick={verifyOTP}
                disabled={loading || otp.length !== 6}
                className={`w-full px-4 py-3 rounded-2xl font-semibold text-white shadow-lg transition-all ${
                  loading || otp.length !== 6
                    ? "bg-slate-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 hover:-translate-y-0.5"
                }`}
              >
                {loading ? "Verifying..." : "Verify & Continue"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setOtpSent(false);
                  setOtp("");
                }}
                className="w-full mt-4 text-xs text-slate-300 hover:text-white underline"
              >
                ← Change phone number
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
