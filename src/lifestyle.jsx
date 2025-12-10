import React from "react";
import VoteButton from "./VoteButton.jsx";  // ← ADD THIS
import k from "./assets/k.jpg";
import sg from "./assets/sg.jpg";
import khan from './assets/khan2.jpg';
import arab from './assets/arab.jpg';

export default function Lifestyle() {
  const competitors = [
    {
      id: 1,
      name: "Третьякова Елена Блогер 👧 Материнство-Lifestyle-Beauty",
      userName: "@tretyakovaele",
      link: "https://t.me/tretyakovaele",
      img: k,
    },
    {
      id: 2,
      name: "SG Travel+Lifestyle Hacks",
      userName: "@youtripsg",
      link: "https://t.me/youtripsg",
      img: sg,
    },
    {
      id: 3,
      name: "Sahil Khan Lifestyle",
      userName: "@sahilkhanstyle",
      link: "https://t.me/sahilkhanstyle",
      img: khan,
    },
    {
      id: 4,
      name: "راز جوانی",
      userName: "@lifestyle3",
      link: "https://t.me/lifestyle3",
      img: arab,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-4xl  text-center font-bold mb-8 text-indigo-700">🗳️ Vote for Best Lifestyle Channel</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {competitors.map((comp) => (
          <div key={comp.id} className="border border-gray-700 rounded-lg p-4 flex flex-col items-center shadow-lg hover:bg-gray-800 transition-all">
            <img
              className="w-full h-48 object-cover rounded-md mb-3"
              src={comp.img}
              alt={comp.name}
            />
            <h2 className="text-lg text-center font-semibold mb-1">{comp.name}</h2>
            <a
              href={comp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:underline mb-6"
            >
              {comp.userName}
            </a>

            {/* ✅ VOTE BUTTON CONNECTS TO MONGODB */}
            <VoteButton 
              category="lifestyle" 
              competitorId={comp.id} 
            />

           
          </div>
        ))}
      </div>
    </div>
  );
}
