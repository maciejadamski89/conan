"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

let totalPointsToUse = 40;
let initialTalentPoints ={
  "akrobatyka": 0,
  "alchemia": 0,
  "postępowanieZeZwierzętami": 0,
  "zwierzęcyRefleks": 0,
  "zmysłyZwierząt": 0,
  "językiTajemne": 0,
  "szał": 0,
  "rzemieślnik": 0,
  "kowal": 0,
  "bójka": 0,
  "stolarstwo": 0,
  "wspinaczka": 0,
  "szkoda": 0,
  "poczucieZagrożenia": 0,
  "zmysłKierunkowy": 0,
  "sława": 0,
  "fałszerstwo": 0,
  "złotnik": 0,
  "zielarstwo": 0,
  "język": 0,
  "otwieranieZamka": 0,
  "historia": 0,
  "magicznyZmysł": 0,
  "lekarstwo": 0,
  "ruch": 0,
  "nawigacja": 0,
  "spostrzegawczość": 0,
  "osobistyMagnetyzm": 0,
  "prawaFizyczne": 0,
  "okradanie": 0,
  "minstrel": 0,
  "wytrzymałośćNaTruciznę": 0,
  "czytanie_pisanie": 0,
  "żeglarstwo": 0,
  "inżynieria": 0,
  "kuglarstwo": 0,
  "wytrwałość": 0,
  "wytrzymałość": 0,
  "przetrwanie": 0,
  "pływanie": 0,
  "tropienie": 0,
  "broń": 0,
  "wola": 0,
  "zastawianieSideł": 0,
  "walkaDwomaBroniami": 0,
  "wyczuciePogody": 0,
  "zapasy": 0,
} 


export default function Home() {
  const [talentPoints, setTalentPoints] = useState(initialTalentPoints);

  const increment = (id:string) => {
    setTalentPoints({
      ...talentPoints,
     [id]: talentPoints[id] + 1,
    });
    totalPointsToUse -= 1;
  };

  const decrement = (id:string) => {
    setTalentPoints({
      ...talentPoints,
     [id]: talentPoints[id] - 1,
    });
    totalPointsToUse += 1;
  };

  return (
    <main className="">
      <Image 
        className='-z-10 opacity-30'
        src="/conan.jpg"
        alt="Conan"
        fill={true}
        />

        <div className="flex items-center justify-center h-screen">
          <h1 className="text-5xl text-white">Witaj w aplikacji do tworzenia postaci fo gry RPG CONAN !</h1>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <p className='mt-5 text-xl font-bold text-white'>Liczba pkt do wydania: {totalPointsToUse}</p>
          <div className="mt-10"></div>

        {Object.keys(initialTalentPoints).map((talent) => { 
           return( 
            <div key={talent} className='flex items-center justify-center text-left'>
              <p className='mr-5 text-xl text-white'>{talent}</p>
              <button className='mx-2 text-4xl text-white' onClick={() => {(talentPoints[talent] > 0 && totalPointsToUse < 40) ? decrement(talent) : null}}>-</button>
              <p className='text-xl text-white'>{talentPoints[talent]}</p>
              <button className='mx-2 text-4xl text-white' onClick={() => {(talentPoints[talent] < 5 && totalPointsToUse > 0 ) ? increment(talent) : null}}>+</button>
            </div>
           )
          }) 
        }
        </div>
    </main>
)}