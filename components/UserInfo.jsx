"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Navbar from "./Navbar";
import StudentList from "./StudentList";

export default function UserInfo() {
    const { data:session } = useSession();

    return (
        // <div className="grid place-items-center h-screen">
            // <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
            //     <div>
            //         Name: <span className="font-bold">{session?.user?.name}</span>
            //     </div>
            //     <div>
            //         Email: <span className="font-bold">{session?.user?.email}</span>
            //     </div>
            //     <button onClick={() => signOut()} className="bg-red-600 text-white font-bold px-6 py-2 mt-3">
            //         Logout
            //     </button>
            // </div>

        //     <>
        //         <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        //             <div>
        //                 <h2 className="font-bold text-2xl">Student</h2>
        //                 <div>Student Infos</div>
        //             </div>

        //             <div className="flex gap-2">
        //                 <RemoveBtn/>
        //                 <Link href={"/editStudent/123"}>
        //                     <HiPencilAlt size={24} />
        //                 </Link>
        //             </div>
        //         </div>
        //     </>
        // </div>

        <div className="max-w-3xl mx-auto p-4">
            <Navbar/>
            <StudentList/>
        </div>
    );
}