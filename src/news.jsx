import React from "react";
import VoteButton from "./VoteButton.jsx";  // ✅ ADD THIS
import img1 from "./assets/tikvah.jpg";
import img2 from "./assets/technews.jpg";
import img3 from "./assets/tel.jpg";

export default function News() {  // ✅ Fixed function name
  const newsChannels = [
    {
      id: "1",
      name: "🇬🇧 Telemetrio - Analytics of Telegram Channels",
      userName: "@telemetrio_news",
      link: "https://t.me/telemetrio_news",
      img: img3
    },
    {
      id: "2",
      name: "🇪🇹 TIKVAH-ETHIOPIA",
      userName: "@tikvahethiopia",
      link: "https://t.me/tikvahethiopia",
      img: img1
    },
    {
      id: "3",
      name: "🇬🇧 Discover • Tech News",
      userName: "@perplexity",
      link: "https://t.me/perplexity",
      img: img2
    },
  ];

  const CATEGORY = "best_news";

  return (
    <div className="min-h-screen bg-black p-6 flex flex-col items-center">
      <h1 className="text-4xl text-center font-bold mb-8 text-indigo-700">🗳️ Vote for Best News Channel</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsChannels.map((news) => (
          <div
            key={news.id}
            className="border border-gray-700 rounded-2xl shadow-lg p-6 flex flex-col items-center bg-gray-900 hover:scale-105 transition-all text-white"
          >
            <img
              src={news.img}
              alt={news.name}
              className="w-48 h-48 object-cover rounded-2xl mb-4 shadow-lg"
            />
            <h2 className="text-2xl font-bold mb-2 text-center px-4">{news.name}</h2>
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mb-6 font-semibold"
            >
              {news.userName}
            </a>
            
            {/* ✅ 5 FREE VOTES + UPGRADE + MongoDB */}
            <VoteButton 
              category={CATEGORY}
              competitorId={news.id}
              competitorName={news.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
