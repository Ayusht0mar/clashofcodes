"use client"
import Header from '@/components/Header';
import MainSection from '@/components/Main';
import { useState } from 'react';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Select Language');
  const [isDuelStarted, setDuelStarted] = useState<boolean>(false);

  const startDuel = () => {
    setDuelStarted(true);
    alert('Duel Started!');
  };

  return (
    <div className="min-h-screen text-white flex flex-col">
      {/* Header */}
      <Header/>

      {/* Main Section */}
      <MainSection/>
      <main className="flex-grow p-8">

        {/* Code Duel Section */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-[#FFF488] p-6 rounded-lg flex flex-col text-black">
            <h2 className="text-xl font-bold mb-4">Code Duel</h2>
            <p className="mb-4">This is a one on one coding mode where you get matched with a random player of similar level as of you.</p>
            <p className="font-semibold">Note: This game is a Ranked match so will affect your stars.</p>
            <a
              className="mt-4 bg-white w-fit mx-auto text-black border-2 border-black font-semibold py-2 px-4 rounded hover:bg-gray-700"
              onClick={startDuel}
              href='/duel'
            >
              Enter Duel
            </a>
          </div>

          {/* Locked sections */}
          <div className="bg-gray-700 p-6 rounded-lg flex justify-center items-center">
            <span className="text-2xl text-gray-400">Locked</span>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg flex justify-center items-center">
            <span className="text-2xl text-gray-400">Locked</span>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg flex justify-center items-center">
            <span className="text-2xl text-gray-400">Locked</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-gray-400 flex justify-between">
        <div>
          <button className="hover:text-white">Open Settings</button>
        </div>
        <div>
          <button className="hover:text-white">Enter Game</button>
        </div>
      </footer>
    </div>
  );
}
