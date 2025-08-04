import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 font-[var(--font-geist-sans)]">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold text-white">
          Welcome to My Trello Board
        </h1>
        {/* <p className="text-lg text-white">
          This is a simple Trello board clone built with Next.js and Zustand.
        </p> */}
        <div className="pt-8">
          <a
            href="/board"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Go to Board
          </a>
        </div>
      </div>
    </div>
  );
}
