import React from "react";
import VoteButton from "./VoteButton.jsx";  // ← ADD THIS
import chatgpt from "./assets/chatgpt.jpg";
import ifttt from "./assets/ifttt.jpg";
import Spotybot from "./assets/spotify.jpg";
import Trivia from "./assets/Trivia.jpg";

export default function Upgrade() {  // ← Fixed function name
  const competitors = [
    { 
      id: 1, 
      name: "@GPT4Telegrambot", 
      link: "https://t.me/GPT4Telegrambot", 
      img: chatgpt 
    },
    { 
      id: 2, 
      name: "@IFTTT", 
      link: "https://t.me/IFTTT", 
      img: ifttt 
    },
    { 
      id: 3, 
      name: "@Spotyy_bot", 
      link: "https://t.me/Spotyy_bot", 
      img: Spotybot 
    },
    { 
      id: 4, 
      name: "@TriviaBot", 
      link: "https://t.me/TriviaBot", 
      img: Trivia 
    },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl  text-center font-bold mb-8 text-indigo-700">🗳️ Vote for Best Bot Channel</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {competitors.map((bot) => (
          <div
            key={bot.id}
            className="bg-gray-600 rounded-2xl shadow-lg p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform"
          >
            <img
              src={bot.img}
              alt={bot.name}
              className="w-48 h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{bot.name}</h2>
            

            {/* ✅ MONGODB VOTE BUTTON */}
            <VoteButton 
              category="bots" 
              competitorId={bot.id} 
              competitorName={bot.name}
            />

           
          </div>
        ))}
      </div>
    </div>
  );
}
