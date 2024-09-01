"use client"

import { useEffect, useState } from "react";

export default function Home() {

  const [greeting, setGreeting] = useState("")
  const currentHour = new Date().getHours();


  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <main className="flex justify-center items-center h-screen bg-[#e2e8f0]">
      <div className="flex items-center text-[48px]">
        <span className="text-gray-800">Hello User</span>
        <span
          className="pl-2 font-bold"
          style={{
            background: 'linear-gradient(45deg, #ff6b6b, #f06595, #ab83a1, #8c7ae6)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          {greeting}!!!
        </span>
      </div>
    </main>
  );
}
