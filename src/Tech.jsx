import React from "react";
import VoteButton from "./VoteButton.jsx";  // ✅ ADD THIS
import kesem from "./assets/kesem.jpg";
import kelem from "./assets/kelem.jpg";
import stem_murad from "./assets/stem_with_murad.jpg";
import Top from "./assets/Top_students.jpg";
import python from "./assets/python.jpg";

export default function Tech() {
  const techChannels = [
    {
      id: "1",
      name: "STEM with Murad",
      image: stem_murad,
      link: "https://t.me/STEMwithMurad",
      username: "@STEMwithMurad"
    },
    {
      id: "2",
      name: "KESEM Academy",
      image: kesem,
      link: "https://t.me/Kesemacadem",
      username: "@KesemAcademy"
    },
    {
      id: "3",
      name: "Keleme",
      image: kelem,
      link: "https://t.me/keleme_2013",
      username: "@Keleme"
    },
    {
      id: "4",
      name: "Top Students",
      image: Top,
      link: "https://t.me/top_students1",
      username: "@TopStudents"
    },
    {
      id: "5",
      name: "Code Programmer",
      image: python,
      link: "https://t.me/CodeProgrammer",
      username: "@CodeProgrammer"
    }
  ];

  const CATEGORY = "tech";

  return (
    <div className="bg-black min-h-screen flex flex-col items-center p-6 text-white">
      <h1 className="text-4xl text-center font-bold mb-8 text-indigo-700">🗳️ Vote for Best Tech Channel</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {techChannels.map((channel) => (
          <div
            key={channel.id}
            className="border border-gray-700 rounded-2xl p-6 flex flex-col items-center bg-gray-900 hover:scale-105 transition-all shadow-2xl"
          >
            <img
              className="w-48 h-48 object-cover rounded-2xl mb-4 shadow-lg"
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
              {channel.username}
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
