import React from "react";
import VoteButton from "./VoteButton.jsx";  // ✅ ADD THIS
import animation from "./assets/animation_film.jpg";
import music from "./assets/best_music.jpg";
import fourfourthree from "./assets/animation_film.jpg";  // Replace with real image

export default function Entertainment() {
  const entertainmentChannels = [
    {
      id: "1",
      name: "Animation Film Channel",
      image: animation,
      link: "https://t.me/Films_433",
      userName: "@Films_433"
    },
    {
      id: "2",
      name: "Best Telegram Music Channel",
      image: music,
      link: "https://t.me/best_telegram_music_ch",
      userName: "@best_telegram_music_ch"
    },
    {
      id: "3",
      name: "Football & Highlights Channel",
      image: fourfourthree,
      link: "https://t.me/fourfourthree",
      userName: "@fourfourthree"
    },
  ];

  const CATEGORY = "entertainment";

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-8 text-center text-amber-400">
        🎬 Best Entertainment Channels
      </h1>

      {/* Grid of Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {entertainmentChannels.map((channel) => (
          <div
            key={channel.id}
            className="border border-gray-700 rounded-2xl p-6 flex flex-col items-center bg-gray-900 hover:scale-105 transition-all shadow-2xl"
          >
            <img
              className="w-48 h-48 rounded-2xl object-cover mb-4 shadow-lg"
              src={channel.image}
              alt={channel.name}
            />
            <h2 className="text-2xl font-bold mb-2 text-center px-4">{channel.name}</h2>
            <a
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mb-6 font-semibold"
            >
              {channel.userName}
            </a>
            
            {/* ✅ 5 FREE VOTES + UPGRADE + MongoDB */}
            <VoteButton 
              category={CATEGORY}
              competitorId={channel.id}
              competitorName={channel.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
