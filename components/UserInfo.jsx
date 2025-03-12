"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
      {session ? (
        <>
          <div>
            Admin Name: <span className="font-bold">{session.user.name}</span>
          </div>
          <div>
            Email: <span className="font-bold">{session.user.email}</span>
          </div>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
          >
            Log Out
          </button>
        </>
      ) : (
        <p>No user is signed in.</p>
      )}
    </div>
  );
}
