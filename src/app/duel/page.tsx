"use client"

import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';

export default function CodeDuel() {
  const [roomCode, setRoomCode] = useState<string>('');
//   const router = useRouter();

  const enterRoom = () => {
    if (roomCode) {
      alert(`Entering room: ${roomCode}`);
      // Logic for entering a room goes here
    } else {
      alert('Please enter a valid room code.');
    }
  };

  const createRoom = () => {
    alert('Creating a new room...');
    // Logic for creating a new room goes here
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white flex flex-col">
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <main className="w-[96vw] my-5 mx-auto flex-grow flex flex-col items-center justify-center bg-[#FFF488] p-8 rounded-lg">
        {/* <button
          className="self-start text-black hover:text-gray-700 mb-4"
        //   onClick={() => router.back()}
        >
          &larr; Back
        </button> */}
        
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-black">⚔️ Code Duel</h1>
        </div>

        {/* Enter Room Section */}
        <div className="mb-4 flex items-center space-x-4">
          <input
            type="text"
            placeholder="Enter Room code..."
            className="bg-white text-black p-2 rounded border border-black"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          />
          <button
            className="bg-black text-white py-2 px-4 rounded border-2 border-black hover:bg-gray-800"
            onClick={enterRoom}
          >
            Enter Room
          </button>
        </div>

        <div className="text-black mb-4">or</div>

        {/* Create Room Section */}
        <button
          className="bg-white text-black py-2 px-6 rounded border-2 border-black hover:bg-gray-200"
          onClick={createRoom}
        >
          Create Room
        </button>
      </main>

      {/* Footer */}
      <footer className="p-4 text-gray-400 flex justify-between">
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
