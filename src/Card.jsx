export default function Card({ onClick, cards }) {
  const rand = Math.floor(Math.random() * 4);

  return (
    <a
      className="w-56 flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-3xl transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      href="#"
      onClick={() => onClick(cards[rand].id)}
    >
      <img
        className="w-full h-auto rounded-t-xl"
        src={cards[rand].imgsrc}
        alt="Image Description"
        style={{ height: '200px', objectFit: 'contain' }}
      ></img>
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {cards[rand].title}
        </h3>
        <p className="mt-1 text-gray-500 dark:text-neutral-400">
          {cards[rand].description}
        </p>
      </div>
    </a>
  );
}
