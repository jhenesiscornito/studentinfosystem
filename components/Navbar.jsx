"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
    const { data:session } = useSession();

    return (
        <div>
            <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
                <div>
                    Admin Name: <span className="font-bold">{session?.user?.name}</span>
                </div>
                <div>
                    Email: <span className="font-bold">{session?.user?.email}</span>
                </div>
                <button onClick={() => signOut()} className="bg-red-600 text-white font-bold px-6 py-2 mt-3">
                    Logout
                </button>
            </div>

            <nav className="flex justify-between items-center bg-green-900 px-8 py-3 rounded-md">
                <Link className="text-white font-bold" href={"/"}>Student Information System</Link>
                <Link className="bg-white p-2 rounded-sm" href={"/addStudent"}>Add Student</Link>
            </nav>
        </div>
    );
}