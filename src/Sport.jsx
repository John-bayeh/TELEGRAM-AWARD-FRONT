import React, { useEffect, useState } from "react";
import VoteButton from './VoteButton.jsx';  // ✅ KEEP THIS
import arsenal from "./assets/arsenal.jpg";
import liverpool from "./assets/liverpool.jpg";
import united from "./assets/united.jpg";
import ftt from "./assets/433.jpg";
import skysport from "./assets/skysport.jpg";

export default function Sports() {
  // SPORT COMPETITORS
  const sportsTeams = [
    { id: "1", name: "Zena Manchester United", image: united },
    { id: "2", name: "Zena Arsenal", image: arsenal },
    { id: "3", name: "Zena Liverpool", image: liverpool },
    { id: "4", name: "4-3-3 ስፖርት በኢትዮጵያ™", image: ftt },
    { id: "5", name: "ስካይ Sport ET™", image: skysport },
  ];

  const CATEGORY = "best_sport";

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">🗳️ Vote for Best Sport Channel</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sportsTeams.map((team) => (
          <div
            key={team.id}
            className="border border-gray-700 rounded-2xl p-6 flex flex-col items-center bg-gray-900 hover:scale-105 transition-all shadow-2xl"
          >
            <img
              src={team.image}
              alt={team.name}
              className="w-48 h-48 rounded-2xl mb-4 object-cover shadow-lg"
            />
            <h2 className="text-2xl font-bold mb-4 text-center px-4">{team.name}</h2>
            
            {/* ✅ VOTE BUTTON WITH 5 FREE VOTES + UPGRADE */}
            <VoteButton 
              category={CATEGORY}
              competitorId={team.id}
              competitorName={team.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
