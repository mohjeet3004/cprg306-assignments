import React from "react";
import StudentInfo from "./student-info";

export default function Page() {
  const pageStyle = {
    backgroundColor: "blue",
    padding: "20px",
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div style={pageStyle} className="rounded-xl">
        <h1>Shopping List</h1>
        <StudentInfo />
      </div>
    </main>
  );
}
