import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
      <h1 className="font-bold text-3xl">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <div>
        <a href="../week-2">
          <h2 className="hover:text-green-500 hover:underline">Week 2</h2>
        </a>
      </div>
      <div>
        <a href="../week-3">
          <h2 className="hover:text-green-500 hover:underline">Week 3</h2>
        </a>
      </div>
      <div>
        <a href="../week-4">
          <h2 className="hover:text-green-500 hover:underline">Week 4</h2>
        </a>
      </div>
      <div>
        <a href="../week-5">
          <h2 className="hover:text-green-500 hover:underline">Week 5</h2>
        </a>
      </div>
      <div>
        <a href="../week-6">
          <h2 className="hover:text-green-500 hover:underline">Week 6</h2>
        </a>
      </div>
      <div>
        <a href="../week-7">
          <h2 className="hover:text-green-500 hover:underline">Week 7</h2>
        </a>
      </div>
    </main>
  );
}
