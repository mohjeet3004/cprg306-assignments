import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        <a href="../week-2">
          <h2>Week 2</h2>
        </a>
      </div>
      <div>
        <a href="../week-3">
          <h2>Week 3</h2>
        </a>
      </div>
      <div>
        <a href="../week-4">
          <h2>Week 4</h2>
        </a>
      </div>
    </main>
  );
}
