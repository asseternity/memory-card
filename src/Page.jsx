import { useState } from 'react';
import Card from './Card';

export default function Page() {
  const [clicks, addClick] = useState(0);
  const [clickedIDs, addClickedIDs] = useState([]);

  function handleClick(dataFromCard) {
    addClick(clicks + 1);
    let isIDnew = true;
    for (let i = 0; i < clickedIDs.length; i++) {
      if (clickedIDs[i] == dataFromCard) {
        isIDnew = false;
      }
    }
    if (isIDnew == true) {
      addClickedIDs([...clickedIDs, dataFromCard]);
    } else {
      addClickedIDs([]);
      addClick(0);
    }
  }

  const DnDCards = [
    {
      id: 0,
      title: 'Bard',
      description: '123',
      imgsrc:
        'https://oldschoolroleplaying.com/wp-content/uploads/2019/02/bard-two-773x1024.png',
    },
    {
      id: 1,
      title: 'Artificer',
      description: '123',
      imgsrc:
        'https://www.wargamer.com/wp-content/sites/wargamer/2021/10/dnd-artificer-5e-warforged-2.jpg',
    },
    {
      id: 2,
      title: 'Cleric',
      description: '123',
      imgsrc:
        'https://qph.cf2.quoracdn.net/main-qimg-bf635a031a8c642217b72de15a52de14',
    },
    {
      id: 3,
      title: 'Wizard',
      description: '123',
      imgsrc:
        'https://qph.cf2.quoracdn.net/main-qimg-5a2e7d1065622f3870ce089824293d17-pjlq',
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 gap-4 grid-rows-1 px-4 py-4">
      <div className="container grid grid-cols-2 gap-4">
        <h1 className="text-4xl">D&D Memory Game</h1>
        <div className="flex flex-col items-end">
          <p>Current Score: {clickedIDs.length}</p>
          <p>Best Score: {clickedIDs.length}</p>
        </div>
      </div>
      <div className="container mx-auto grid gap-4 cardContainer">
        <Card cards={DnDCards} onClick={handleClick} />
        <Card cards={DnDCards} onClick={handleClick} />
        <Card cards={DnDCards} onClick={handleClick} />
        <Card cards={DnDCards} onClick={handleClick} />
        <Card cards={DnDCards} onClick={handleClick} />
        <Card cards={DnDCards} onClick={handleClick} />
        <Card cards={DnDCards} onClick={handleClick} />
        <Card cards={DnDCards} onClick={handleClick} />
        <Card cards={DnDCards} onClick={handleClick} />
        <Card cards={DnDCards} onClick={handleClick} />
        <Card cards={DnDCards} onClick={handleClick} />
        <Card cards={DnDCards} onClick={handleClick} />
      </div>
    </div>
  );
}
