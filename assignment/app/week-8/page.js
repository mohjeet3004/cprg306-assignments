"use client";
import { useUserAuth } from "./_utils/auth-context";
import Page from "./shopping-list/page.js";
export default function page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function signInGithub() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  }
  async function signOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <main className="bg-black text-white">
      {user ? (
        <Page signOut={signOut} />
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col justify-center items-center gap-10 text-2xl">
            <h1 className="text-5xl font-bold m-2 justify-center flex">
              Shopping List App
            </h1>
            <button
              className="text-white p-2 m-2 rounded-md bg-[#555555] flex flex-row w-80 gap-4 text-[25px]"
              onClick={signInGithub}
            >
              Sign in with GitHub
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
