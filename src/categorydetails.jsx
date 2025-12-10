import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VoteButton from "./VoteButton.jsx";

// ✅ ALL YOUR IMAGES (Fixed imports)
import stem_murad from "./assets/stem_with_murad.jpg";
import kesem from "./assets/kesem.jpg";
import kelem from "./assets/kelem.jpg";
import Top from "./assets/Top_students.jpg";
import python from "./assets/python.jpg";
import arsenal from "./assets/arsenal.jpg";
import liverpool from "./assets/liverpool.jpg";
import united from "./assets/united.jpg";
import ftt from './assets/433.jpg';
import skysport from './assets/skysport.jpg';
import k from "./assets/k.jpg";
import sg from "./assets/sg.jpg";
import khan from './assets/khan2.jpg';
import arab from "./assets/arab.jpg";
import memeImg from './assets/meme.jpg';
import coding_humor from './assets/dark_humor.jpg';
import dark_humor from './assets/coding_humor.jpg';
import chatgpt from "./assets/chatgpt.jpg";
import ifttt from "./assets/ifttt.jpg";
import Spotybot from "./assets/spotify.jpg";
import Trivia from "./assets/Trivia.jpg";
import img1 from "./assets/tikvah.jpg";
import img2 from "./assets/technews.jpg";
import img3 from "./assets/tel.jpg";
import animation from "./assets/animation_film.jpg";
import music from "./assets/best_music.jpg";
import fourfourthree from "./assets/animation_film.jpg";

const allCategories = {
  tech: {
    id: "tech",
    name: "Best Tech Group",
    desc: "Award for the best Tech Telegram groups",
    competitors: [
      { id: "1", name: "STEM with Murad", username: "@STEMwithMurad", img: stem_murad },
      { id: "2", name: "KESEM Academy", username: "@KesemAcademy", img: kesem },
      { id: "3", name: "Keleme", username: "@Keleme", img: kelem },
      { id: "4", name: "Top Students", username: "@TopStudents", img: Top },
      { id: "5", name: "@CodeProgrammer", username: "@CodeProgrammer", img: python },
    ]
  },
  sport: {
    id: "sport",
    name: "Best Sport",
    desc: "Award for Sports groups & channels",
    competitors: [
      { id: "1", name: "Zena Manchester United", username: "@zena_manchester_united", img: united },
      { id: "2", name: "Zena Arsenal", username: "@zena_arsenal", img: arsenal },
      { id: "3", name: "Zena Liverpool", username: "@zena_liverpool", img: liverpool },
      { id: "4", name: "4-3-3 Sport Ethiopia™", username: "", img: ftt },
      { id: "5", name: "Skysport ET™", username: "", img: skysport },
    ]
  },
  lifestyle: {
    id: "lifestyle",
    name: "Best Lifestyle",
    desc: "Award for Lifestyle channels",
    competitors: [
      { id: "1", name: "Третьякова Елена", username: "@tretyakovaele", img: k },
      { id: "2", name: "SG Travel+Lifestyle Hacks", username: "@youtripsg", img: sg },
      { id: "3", name: "Sahil Khan Lifestyle", username: "@sahilkhanstyle", img: khan },
      { id: "4", name: "راز جوانی", username: "@lifestyle3", img: arab },
    ]
  },
  meme: {
    id: "meme",
    name: "Best Meme Group",
    desc: "Award for Meme groups",
    competitors: [
      { id: "1", name: "Coding Humor", username: "@funnyvideosandmemesxplodecomedy", img: memeImg },
      { id: "2", name: "Memes", username: "@bestmemes", img: coding_humor },
      { id: "3", name: "Dark Humor Hub", username: "@darkjokeshere", img: dark_humor },
    ]
  },
  bot: {
    id: "bot",
    name: "Best Bot",
    desc: "Award for Telegram Bots",
    competitors: [
      { id: "1", name: "@GPT4Telegrambot", img: chatgpt },
      { id: "2", name: "@IFTTT", img: ifttt },
      { id: "3", name: "@Spotyy_bot", img: Spotybot },
      { id: "4", name: "@TriviaBot", img: Trivia },
    ]
  },
  news: {
    id: "news",
    name: "Best News Channel",
    desc: "Award for News channels",
    competitors: [
      { id: "1", name: "Telemetrio", username: "@telemetrio_news", img: img3 },
      { id: "2", name: "TIKVAH-ETHIOPIA", username: "@tikvahethiopia", img: img1 },
      { id: "3", name: "Discover Tech News", username: "@perplexity", img: img2 },
    ]
  },
  entertainment: {
    id: "entertainment",
    name: "Best Entertainment",
    desc: "Award for Entertainment groups",
    competitors: [
      { id: "1", name: "Entertainment One", username: "@ent1", img: animation },
      { id: "2", name: "Best Music", username: "@music_channel", img: music },
      { id: "3", name: "Animation Films", username: "@animation_films", img: fourfourthree },
    ]
  },
};

export default function CategoryDetail() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const cat = allCategories[id];
    if (cat) {
      const catCopy = { 
        ...cat, 
        competitors: cat.competitors.map(c => ({ ...c })) 
      };
      setCategory(catCopy);
    }
  }, [id]);

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
        <p className="text-white text-xl sm:text-2xl text-center">Category not found 😢</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 sm:px-6 md:px-8 py-8 sm:py-12">
      <div className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto">
        {/* Header - Responsive */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent leading-tight">
          {category.name}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
          {category.desc}
        </p>

        {/* Competitors Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {category.competitors.map((competitor) => (
            <div
              key={competitor.id}
              className="group bg-gray-900/80 border-2 border-gray-700/50 hover:border-yellow-500/70 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col items-center hover:bg-gray-800/60 transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25"
            >
              {/* Image - Responsive sizing */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden mb-4 sm:mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300 mx-auto">
                <img 
                  src={competitor.img} 
                  alt={competitor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Name - Responsive text */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-center mb-2 px-2 sm:px-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent leading-tight">
                {competitor.name}
              </h3>
              
              {/* Username - Responsive */}
              {competitor.username && (
                <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 font-mono px-1 text-center">
                  👤 {competitor.username}
                </p>
              )}
              
              {/* Votes - Responsive */}
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-green-400 mb-6 sm:mb-8 drop-shadow-lg text-center">
                0 Votes {/* Fixed for now */}
              </div>
              
              {/* Vote Button - Full width responsive */}
              <div className="w-full max-w-xs mx-auto">
                <VoteButton 
                  category={id} 
                  competitorId={competitor.id}
                  competitorName={competitor.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
